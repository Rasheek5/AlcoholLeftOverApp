import {Platform, StyleSheet} from 'react-native';

import {colors} from '../../theme/colors';

const styles = StyleSheet.create({
  labelTextStyle: {
    color: colors.purpleNavy,
  },
  inputContainerStyle: {
    marginVertical: 5,
    height: 55,
    borderWidth: 0,
  },
  inputStyle: {
    top: Platform.OS == 'android' ? 5 : 0,
    alignItems: 'center',
  },
  error: {
    color: colors.red,
    marginLeft: 3,
    marginBottom: 5,
  },
});

export default styles;
