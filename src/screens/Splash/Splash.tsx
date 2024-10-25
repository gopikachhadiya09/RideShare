import {StyleSheet, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import LottieView from 'lottie-react-native';
import {hp, wp} from '../../styles/GlobalStyle';
import {useNavigation} from '@react-navigation/native';
import {generateDummyRideRequests} from '../../constants/AppConstant';
import {SET_RIDE_REQUESTS} from '../../Redux/Action/ActionType';
import {useDispatch, useSelector} from 'react-redux';
import useLocation from '../../utils/LocationService';

const Splash: React.FC = () => {
  const animationRef = useRef<LottieView>(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isLocationFetched = useLocation();

  // Get Ride request from redux
  const rideRequests = useSelector(
    (state: RootState) => state.Ride?.rideRequests,
  );

  useEffect(() => {
    animationRef.current?.play();
    const dummyRequests = generateDummyRideRequests();

    // Store Ride request to Redux
    // Currently I have added dummy data (Can also use API payload)
    if (!rideRequests || rideRequests.length === 0) {
      dispatch({
        type: SET_RIDE_REQUESTS,
        rideRequests: dummyRequests,
      });
    }
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {/* Splash Annimation */}
      <LottieView
        ref={animationRef}
        autoPlay
        source={require('../../assets/Json/map.json')}
        style={styles.animation}
        resizeMode="contain"
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    height: hp(80),
    width: wp(90),
  },
});
