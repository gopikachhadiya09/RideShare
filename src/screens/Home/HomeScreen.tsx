import React, {useRef, useMemo, useCallback, useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../constants/Colors';
import * as ActionType from '../../Redux/Action/ActionType';
import {ImagePath} from '../../constants/ImagePath';
import PulsatingMarker from '../../Component/PulsatingMarker';
import {RootState} from '../../Redux/Store/Store';
import {RootStackParamList} from '../../../App';
import styles from './styles';

type HomeScreenNavigationProp = NavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const MapRef = useRef<MapView>(null);
  const dispatch = useDispatch();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  // Get rider requests from Redux
  const rideRequests = useSelector(
    (state: RootState) => state.Ride?.rideRequests || [],
  );

  // Get driver location and address from Redux
  const location = useSelector(
    (state: RootState) => state.Driver?.driverLocation,
  );

  useEffect(() => {
    if (location) {
      MapRef.current?.animateToRegion({
        ...location,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    }
  }, [location]);

  // Store selected rider in Redux and navigate to RideDetails screen
  const handleMarkerPress = useCallback(
    (request: any) => {
      navigation.navigate('RideDetails');
    },
    [dispatch, navigation],
  );

  // Memoized function to render ride markers on the map
  const renderMarkers = useMemo(
    () =>
      rideRequests.map((request: any) => (
        <Marker
          key={request.id}
          coordinate={{
            latitude: request.pickupLocation.latitude,
            longitude: request.pickupLocation.longitude,
          }}
          onPress={() => handleMarkerPress(request)}>
          <View style={styles.markerContainer}>
            <Image
              source={ImagePath.RiderImage}
              resizeMode="contain"
              style={styles.riderImage}
            />
          </View>
        </Marker>
      )),
    [rideRequests, handleMarkerPress],
  );

  return (
    <View style={styles.container}>
      {/* Map View */}
      <MapView
        style={styles.map}
        ref={MapRef}
        initialRegion={{
          latitude: location?.latitude || 37.7749,
          longitude: location?.longitude || -122.4194,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        followsUserLocation>
        {/* Driver Pulsating Marker */}
        {location && <PulsatingMarker coordinate={location} />}

        {/* Rider Markers */}
        {renderMarkers}
      </MapView>

      {/* Top layer */}
      <View style={[styles.topContainer, styles.shadowProps]}>
        <View style={styles.locationInfo}>
          <View style={styles.avatar}>
            <FontAwesome name="user" size={27} color={Colors.blue} />
          </View>
          <View style={styles.textContainer}>
            <View style={styles.LocationView}>
              <MaterialIcons name="my-location" size={22} color={Colors.blue} />
              <Text style={styles.locationText}>Location</Text>
            </View>
            <Text style={styles.address}>{'Ellis Street, San Francisco'}</Text>
          </View>
          <View style={styles.blank} />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
