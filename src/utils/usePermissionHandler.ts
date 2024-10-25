import { useCallback } from 'react';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const usePermissionHandler = () => {
  const requestLocationPermission = useCallback(async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } else if (Platform.OS === 'ios') {
        const auth = await Geolocation.requestAuthorization('whenInUse');
        return auth === 'granted';
      }
      return false;
    } catch (error) {
      console.warn('Permission Error:', error);
      Alert.alert('Error', 'Failed to request location permission');
      return false;
    }
  }, []);

  return { requestLocationPermission };
};

export default usePermissionHandler;