import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Full_Height = Dimensions.get('window').height;
export const Full_Width = Dimensions.get('window').width;

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export {wp, hp};

export const spacing = {
  micro: 2,
  nano: 4,
  mini: 6,
  small: 8,
  semiSmall: 10,
  base: 12,
  md: 16,
  exMd: 18,
  semiLg: 20,
  lg: 24,
  xl: 32,
  xxl: 45,
  xxxl: 72,
};

export const getFontSize = size => {
  return RFValue(size, 780);
};

export const font = {
  family: {
    Poppins_bold: 'Poppins-Bold',
    Poppins_medium: 'Poppins-Medium',
    Poppins_regular: 'Poppins-Regular',
  },

  color: {
    normal: '#000000',
    subtitle: '#7E7487',
  },

  size: {
    micro: getFontSize(10),
    nano: getFontSize(11),
    mini: getFontSize(12),
    small: getFontSize(13),
    base: getFontSize(14),
    semi: getFontSize(15),
    md: getFontSize(16),
    lg: getFontSize(18),
    semiLg: getFontSize(20),
    xl: getFontSize(22),
    xxl: getFontSize(24),
    xxxl: getFontSize(26),
    xxxxl: getFontSize(35),
    huge: getFontSize(50),
  },
};
