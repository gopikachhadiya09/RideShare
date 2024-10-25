import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';
import {
  font,
  Full_Height,
  Full_Width,
  hp,
  spacing,
  wp,
} from '../../styles/GlobalStyle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  map: {
    width: Full_Width,
    height: Full_Height,
  },
  markerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
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
    color: Colors.Black,
  },
  address: {
    color: Colors.grey,
  },
});

export default styles;
