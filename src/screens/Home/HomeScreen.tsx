// src/screens/HomeScreen.js

import React, {useRef, useMemo, useCallback, useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../constants/Colors';
import {
  font,
  Full_Height,
  Full_Width,
  hp,
  spacing,
  wp,
} from '../../styles/GlobalStyle';
import * as ActionType from '../../Redux/Action/ActionType';
import {ImagePath} from '../../constants/ImagePath';
import PulsatingMarker from '../../Component/PulsatingMarker';

const HomeScreen = () => {
  const MapRef = useRef();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // Get rider request from redux
  const rideRequests = useSelector(state => state.Ride?.rideRequests || []);
  // Get Driver location and address from redux
  const location = useSelector(state => state.Driver?.driverLocation);
  const address = useSelector(state => state.Driver?.address);

  useEffect(() => {
    if (location) {
      MapRef.current?.animateToRegion({
        ...location,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    }
  }, [location, address]);

  // Store Selected rider in redux
  const handleMarkerPress = useCallback(
    request => {
      dispatch({type: ActionType.SELECTED_RIDER, selectedRider: request});
      navigation.navigate('RideDetails');
    },
    [dispatch, navigation],
  );

  // Display Rider marker on map
  const renderMarkers = useMemo(
    () =>
      rideRequests.map(request => (
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
    <View>
      {/* Map View */}
      <MapView
        style={styles.map}
        ref={MapRef}
        initialRegion={{
          latitude: location?.latitude,
          longitude: location?.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        followsUserLocation={true}>
        {/* Driver pulse Animation */}
        {location && <PulsatingMarker coordinate={location} />}

        {/* Rider Markers*/}
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
            <Text style={styles.address}>{address ? address : 'Ellis Street, San Francisco'}</Text>
          </View>
          <View style={styles.blank} />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  map: {
    width: Full_Width,
    height: Full_Height,
  },
  markerText: {
    color: Colors.White,
    fontSize: 18,
    fontWeight: 'bold',
  },
  riderImage: {
    height: hp(9),
    width: wp(9),
  },
  topContainer: {
    position: 'absolute',
    top: hp(7),
    left: hp(2),
    right: hp(2),
    backgroundColor: Colors.White,
    borderRadius: 20,
    padding: 10,
  },
  shadowProps: {
    shadowColor: Colors.Black,
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  LocationView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: wp(12),
    height: wp(12),
    borderRadius: 30,
    marginRight: 10,
    borderColor: Colors.blue,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blank: {
    width: wp(12),
    height: wp(12),
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  locationText: {
    fontFamily: font.family.Poppins_medium,
    fontSize: font.size.semi,
    paddingLeft: spacing.nano,
  },
  address: {
    color: Colors.grey,
  },
});
