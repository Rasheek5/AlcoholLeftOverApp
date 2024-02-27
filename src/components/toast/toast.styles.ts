import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  succesToast: {
    borderLeftColor: 'green',
    width: '85%',
    zIndex: 1,
    opacity: 1,
    height: 70,
    borderColor: 'black',
    borderWidth: 0.4,
  },
  errorToast: {
    borderLeftColor: 'red',
    width: '85%',
    marginTop: 20,
  },
  text1Style: {
    fontSize: 16,
    fontWeight: '400',
  },
  contentContainerStyle: {
    paddingHorizontal: 15,
  },
});
export default styles;
