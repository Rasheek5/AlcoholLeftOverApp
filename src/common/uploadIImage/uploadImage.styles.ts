import {StyleSheet} from 'react-native';
import {colors} from '../../theme';
const styles = StyleSheet.create({
  field: {
    padding: 10,
    paddingVertical: 7,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: colors.skyBlue,
  },
  selectImage: {
    fontSize: 20,
    fontStyle: 'italic',
    marginLeft: 5,
    color: colors.primaryBackground,
    fontWeight: 'bold',
    paddingVertical: 8,
  },
  uploadIconStack: {
    alignItems: 'center',
  },
  error: {
    color: colors.red,
    marginLeft: 3,
    marginTop: 10,
    marginBottom: 5,
  },
  image: {
    height: 180,
    borderRadius: 10,
  },
  footer: {
    marginBottom: 10,
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
