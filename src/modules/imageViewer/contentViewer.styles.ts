import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../theme';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.black,
  },
  imageStles: {
    height: height,
    width: width,
  },
  closeIcon: {
    position: 'absolute',
    top: 15,
    bottom: 0,
    right: 15,
    zIndex: 1,
    height: 30,
  },
});
export default styles;
