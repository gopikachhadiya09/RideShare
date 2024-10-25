import React, { useRef, useEffect } from 'react';
import { Animated, View, StyleSheet, Easing, Image} from 'react-native';
import { Marker, MarkerProps } from 'react-native-maps';
import { ImagePath } from '../constants/ImagePath';
import { hp, wp } from '../styles/GlobalStyle';
import { Colors } from '../constants/Colors';

interface PulsatingMarkerProps extends MarkerProps {
  coordinate: {
    latitude: number;
    longitude: number;
  };
}

const PulsatingMarker: React.FC<PulsatingMarkerProps> = ({ coordinate }) => {
  const pulseAnim = useRef(new Animated.Value(0)).current;

  // Create the pulsating animation
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0,
          duration: 1500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [pulseAnim]);

  const scale = pulseAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 2],
  });

  const opacity = pulseAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 0],
  });

  return (
    <Marker coordinate={coordinate}>
      <View style={styles.markerContainer}>
        <Animated.View
          style={[
            styles.pulsatingCircle,
            { transform: [{ scale }], opacity },
          ]}
        />
        <Image source={ImagePath.BikeImage} style={styles.logo} resizeMode="contain" />
      </View>
    </Marker>
  );
};

export default PulsatingMarker;

const styles = StyleSheet.create({
  markerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  } ,
  pulsatingCircle: {
    width: wp(18),
    height: wp(18),
    borderRadius: 50,
    backgroundColor: Colors.DarkBlue,
    position: 'absolute',
  } ,
  logo: {
    height: hp(14),
    width: wp(14),
  },
});
