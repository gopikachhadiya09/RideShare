import {useEffect, useCallback} from 'react';
import Geolocation, {
  GeoPosition,
  GeolocationError,
} from 'react-native-geolocation-service';
import {useDispatch} from 'react-redux';
import {SET_DRIVER_LOCATION} from '../Redux/Action/ActionType';
import usePermissionHandler from './usePermissionHandler';

const useLocation = (): boolean => {
  const dispatch = useDispatch();

  // Request location permission hook
  const {requestLocationPermission} = usePermissionHandler();

  const getCurrentLocation = useCallback(async () => {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) {
      console.warn('Location permission not granted');
      return;
    }

    // Get Current Position of Driver using Geolocation Service
    Geolocation.getCurrentPosition(
      async (position: GeoPosition) => {
        const {latitude, longitude} = position.coords;

        // Store driver location in Redux
        dispatch({
          type: SET_DRIVER_LOCATION,
          driverLocation: {latitude, longitude},
        });
      },
      (error: GeolocationError) => {
        console.log('Location Error:', error);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, [requestLocationPermission, dispatch]);

  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);

  return true;
};

export default useLocation;
