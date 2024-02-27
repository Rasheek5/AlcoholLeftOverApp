import {StyleSheet} from 'react-native';
import {colors} from '../../theme';
const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.gray,
    marginVertical: 10,
    padding: 10,
  },
  image: {
    height: 150,
    borderRadius: 10,
  },
  bottomView: {
    margin: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 5,
  },
  userIcon: {
    backgroundColor: colors.skyBlue,
    borderRadius: 15,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  comment: {
    marginTop: 10,
  },
  brandName: {
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'italic',
  },
  iconStack: {
    alignItems: 'center',
  },
  valText: {
    left: 4,
  },
  iconsMainStack: {
    marginVertical: 10,
  },
  commentHeader: {
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'italic',
  },
  commentText: {
    marginTop: 5,
  },
  editBtn: {
    height: 40,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editStack: {
    alignItems: 'center',
  },
  editText: {
    color: colors.primaryBackground,
    right: 5,
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 10,
  },
  footerBtn: {
    marginTop: 10,
    width: '100%',
  },
  delete: {
    backgroundColor: colors.red,
  },
});
export default styles;
