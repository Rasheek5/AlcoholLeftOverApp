import {StyleSheet} from 'react-native';
import {colors} from '../../theme';
const styles = StyleSheet.create({
  image: {
    height: 180,
    borderRadius: 10,
  },
  footer: {
    marginTop: 10,
  },
  changePhoto: {
    color: colors.skyBlue,
    fontSize: 16,
    fontWeight: '500',
  },
  remove: {
    color: colors.red,
    fontSize: 16,
    fontWeight: '500',
  },
});
export default styles;
