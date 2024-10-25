import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getDistance} from 'geolib';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {spacing} from '../../styles/GlobalStyle';
import {statusData} from '../../constants/AppConstant';
import {UPDATE_RIDE_REQUEST_STATUS} from '../../Redux/Action/ActionType';
import {GetAddress} from '../../Services/ApiService';
import styles from './styles';
import { Colors } from '../../constants/Colors';

// Define types for the component props and state
type RideRequest = {
  id: string;
  status: string;
  pickupLocation: {latitude: number; longitude: number};
  destination: {latitude: number; longitude: number};
  Rider: {id: string; name: string; email: string; phone: string};
};

type Status = {status: string; label: string};

type Address = {pickup: string; destination: string};

type RootState = {
  Ride: {selectedRider: RideRequest | null};
};

const Header = ({onPress}) => (
  <View style={[styles.header, styles.shadowProps]}>
    <TouchableOpacity onPress={onPress}>
      <Ionicons name="chevron-back" size={25} style={styles.rightIcon} />
    </TouchableOpacity>
    <Text style={styles.headerTxt}>Rider Details</Text>
  </View>
);

const RideDetailsScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // Fetch selected rider detail from redux
  const rideRequests = useSelector(
    (state: RootState) => state.Ride?.selectedRider,
  );
  const [selectedStatus, setSelectedStatus] = useState<string | undefined>(
    rideRequests?.status,
  );
  const [addresses, setAddresses] = useState<Address>({
    pickup: '',
    destination: '',
  });
  const [distance, setDistance] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchAddresses();
  }, [rideRequests]);

  // Calculate distance b/w pick up and destination point using geolib library
  useEffect(() => {
    if (rideRequests) {
      const pickupCoordinates = {
        latitude: rideRequests.pickupLocation.latitude,
        longitude: rideRequests.pickupLocation.longitude,
      };
      const destinationCoordinates = {
        latitude: rideRequests.destination.latitude,
        longitude: rideRequests.destination.longitude,
      };
      const calculatedDistance = getDistance(
        pickupCoordinates,
        destinationCoordinates,
      );
      setDistance(Number((calculatedDistance / 1000).toFixed(2)));
    }
  }, [rideRequests]);

  // Get Address using latitude, longitude from API
  const fetchAddresses = async () => {
    setLoading(true);
    try {
      const [pickupRes, destRes] = await Promise.all([
        GetAddress({
          UserLatitude: rideRequests?.pickupLocation?.latitude!,
          UserLongitude: rideRequests?.pickupLocation?.longitude!,
        }),
        GetAddress({
          UserLatitude: rideRequests?.destination?.latitude!,
          UserLongitude: rideRequests?.destination?.longitude!,
        }),
      ]);

      setAddresses({
        pickup: formatAddress(pickupRes?.address),
        destination: formatAddress(destRes?.address),
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching addresses:', error);
    }
  };

  const formatAddress = (address?: any): string =>
    address
      ? `${address.house_number}, ${address.road}, ${address.city}`
      : 'N/A';

  const handleStatusChange = (status: string) => {
    console.log('Changing status to:', status);
    setSelectedStatus(status);
    dispatch({
      type: UPDATE_RIDE_REQUEST_STATUS,
      rideRequests: {id: rideRequests?.id, status},
    });
  };

  const renderItem: ListRenderItem<Status> = ({item, index}) => {
    const isSelected = item.status === selectedStatus;
    const isDisabled =
      (index == 2 || index == 3) &&
      (selectedStatus == 'Declined' || selectedStatus == 'pending');
    console.log('Selected status', selectedStatus);
    return (
      <TouchableOpacity
        style={[
          styles.button,
          isSelected ? styles.selectedButton : styles.unselectedButton,
          isDisabled && styles.disabledButton,
        ]}
        disabled={isDisabled}
        onPress={() => handleStatusChange(item.status)}>
        <View style={styles.gradiantView}>
          <Text
            style={[
              styles.buttonText,
              {color: isSelected ? Colors.White : Colors.Black},
            ]}>
            {item.label}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.conatiner}>
      <Header
        onPress={() => {
          navigation.goBack();
        }}
      />
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={Colors.blue} />
        </View>
      ) : (
        <ScrollView>
          <View style={[styles.card, styles.shadowProps]}>
            <View style={styles.locationIndicatorView}>
              <View style={styles.stepperView}>
                <View style={styles.circle}>
                  <View style={styles.filledCircle} />
                </View>
                <View style={styles.verticalLine} />
                <Entypo name="location-pin" size={22} color={'red'} />
              </View>
              <View style={styles.textView}>
                <View>
                  <Text style={styles.label}>Pickup Point</Text>
                  <Text style={styles.addressLabel}>
                    {addresses.pickup ||
                      '2514;2516;2518;2520, Polk Street, San Francisco'}
                  </Text>
                </View>
                <View>
                  <Text style={styles.label}>Destination</Text>
                  <Text style={styles.addressLabel}>
                    {addresses.destination ||
                      '1582;1584;1586, Bush Street, San Francisco'}
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.label}>Distance</Text>
              <View style={styles.locationView}>
                <MaterialCommunityIcons
                  name="map-marker-distance"
                  size={22}
                  color={Colors.blue}
                />
                <Text style={[styles.subLabel, {paddingLeft: spacing.mini}]}>
                  {distance} km
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.profileView}>
            <Text style={styles.titleText}>Profile</Text>
          </View>
          <View style={[styles.card1, styles.shadowProps]}>
            <View>
              <Text style={styles.label}>ID:</Text>
              <Text style={styles.ProfileSubLabel}>
                {rideRequests?.Rider?.id}
              </Text>
            </View>
            <View style={styles.profileItem}>
              <Text style={styles.label}>Name:</Text>
              <Text style={styles.subLabel}>{rideRequests?.Rider?.name}</Text>
            </View>

            <View style={styles.profileItem}>
              <Text style={styles.label}>Email:</Text>
              <View style={styles.profileSubItem}>
                <Feather
                  name="mail"
                  size={18}
                  style={styles.profileIcon}
                  color={Colors.blue}
                />
                <Text style={[styles.subLabel]}>
                  {rideRequests?.Rider?.email}
                </Text>
              </View>
            </View>

            <View style={styles.profileItem}>
              <Text style={styles.label}>Phone No:</Text>
              <View style={styles.profileSubItem}>
                <AntDesign
                  name="phone"
                  size={18}
                  style={styles.profileIcon}
                  color={Colors.blue}
                />
                <Text style={[styles.subLabel]}>
                  {rideRequests?.Rider?.phone}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.statusView}>
            <Text style={styles.label}>Status : </Text>
            <Text style={styles.subLabel}>{selectedStatus}</Text>
          </View>
          <FlatList
            scrollEnabled={false}
            data={statusData}
            bounces={false}
            renderItem={renderItem}
            keyExtractor={(item, index) => `flatlist_item_${index}`}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default RideDetailsScreen;
