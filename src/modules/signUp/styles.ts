import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal: '2%',
    paddingTop: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    fontStyle: 'italic',
  },
  headerStack: {
    alignItems: 'center',
  },
  subheader: {
    marginVertical: 10,
    fontSize: 16,
    fontStyle: 'italic',
  },

  dontHaveAccount: {textAlign: 'center', marginVertical: 20, fontSize: 15},
});
export default styles;
