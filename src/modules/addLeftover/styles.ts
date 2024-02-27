import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../theme';
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    flex:0
  },
  commentTextInput: {
    height: 150,
    paddingTop: Platform.OS == 'ios' ? 20 : 0,
    paddingBottom: Platform.OS == 'android' ? 100 : 0,
  },
  deleteBtn: {
    marginTop: 20,
    backgroundColor: colors.red,
  },
});
export default styles;
