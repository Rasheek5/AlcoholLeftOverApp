import {StyleSheet} from 'react-native';
import {colors} from '../../theme';
const styles = StyleSheet.create({
  border: {borderWidth: 1, borderColor: 'gray', borderRadius: 5},
  error: {
    color: colors.red,
    marginLeft: 3,
    marginBottom: 5,
  },
  itemSeparatorStyle: {
    color: colors.gray,
  },
  searchTextInputStyle: {
    height: 50,
    borderColor: colors.gray,
  },
});
export default styles;
