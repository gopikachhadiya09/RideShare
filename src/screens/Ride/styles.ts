import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';
import {font, hp, spacing, wp} from '../../styles/GlobalStyle';

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIcon: {
    alignSelf: 'center',
  },
  header: {
    backgroundColor: Colors.White,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTxt: {
    fontFamily: font.family.Poppins_medium,
    fontSize: font.size.base,
    color: Colors.Black,
    paddingLeft: spacing.base,
  },
  shadowProps: {
    shadowColor: Colors.Black,
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.White,
    padding: spacing.base,
    borderRadius: 12,
    margin: spacing.base,
  },
  card1: {
    backgroundColor: Colors.White,
    padding: 12,
    borderRadius: 12,
    margin: 12,
  },
  label: {
    fontFamily: font.family.Poppins_bold,
    fontSize: 14,
    color: Colors.Black,
  },
  subLabel: {
    fontFamily: font.family.Poppins_regular,
    fontSize: 13,
    color: Colors.Black,
  },
  addressLabel: {
    fontFamily: font.family.Poppins_regular,
    fontSize: 13,
    color: Colors.Black,
    width: wp(55),
  },
  ProfileSubLabel: {
    fontFamily: font.family.Poppins_regular,
    fontSize: 13,
    color: Colors.Black,
    paddingTop: 5,
  },
  circle: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filledCircle: {
    height: 12,
    width: 12,
    backgroundColor: Colors.blue,
    borderRadius: 10,
  },
  stepperView: {
    height: hp(15),
    justifyContent: 'space-between',
    marginRight: 12,
    alignItems: 'center',
    paddingVertical: spacing.small,
  },
  textView: {height: hp(15), justifyContent: 'space-between'},
  locationImage: {
    tintColor: 'red',
  },
  verticalLine: {
    height: '55%',
    width: 1,
    borderWidth: 0.5,
    borderColor: Colors.grey,
  },
  profileSubItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: spacing.micro,
  },
  profileItem: {
    marginTop: spacing.base,
  },
  profileIcon: {
    marginRight: spacing.mini,
  },
  profileView: {
    marginHorizontal: spacing.md,
    paddingTop: spacing.mini,
  },
  titleText: {
    fontFamily: font.family.Poppins_bold,
    fontSize: font.size.md,
    color: Colors.Black,
  },
  button: {
    borderRadius: 12,
    marginHorizontal: spacing.base,
    marginTop: spacing.base,
    borderWidth: 1,
    borderColor: Colors.blue,
  },
  gradiantView: {
    alignItems: 'center',
    padding: 12,
    width: '100%',
    borderRadius: 12,
  },
  statusView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing.md,
    paddingTop: spacing.mini,
  },
  buttonText: {
    color: Colors.White,
    fontFamily: font.family.Poppins_bold,
    fontSize: font.size.base,
  },
  disabledButton: {
    opacity: 0.3,
  },
  selectedButton: {
    backgroundColor: Colors.blue,
  },
  unselectedButton: {
    backgroundColor: Colors.White,
  },
  locationIndicatorView: {
    flexDirection: 'row',
    paddingBottom: spacing.nano,
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addSubLabelPadding: {
    paddingLeft: spacing.mini,
  },
});

export default styles;
