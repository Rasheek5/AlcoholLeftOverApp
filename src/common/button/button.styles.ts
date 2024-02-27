import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

const styles = StyleSheet.create({
  titleStyle: {
    color: colors.primaryBackground,
    fontSize: 19,
    fontWeight: '500',
  },

  contentContainerStyle: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },

  btnWithLabel: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnWithLabelText: {
    marginHorizontal: 5,
  },
});

export default styles;
