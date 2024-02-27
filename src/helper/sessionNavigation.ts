import {Alert} from 'react-native';
import {clearStorage, storeSession} from '.';
import {Customer} from '../constants';
import {USER_SESSION} from '../constants/keyStores';
import {IUser} from '../interfaces';
import {RouterStackNavigationProps} from '../navigation';

export const handleSessionNavigation = (
  data: IUser,
  navigation: RouterStackNavigationProps,
) => {
  storeSession(USER_SESSION, data).then(() => {
    data.userType == Customer
      ? navigation.replace('mainStack', {screen: 'homeStack'})
      : navigation.replace('mainStack', {screen: 'tabStack'});
  });
};

export const logOutHandler = (navigation: RouterStackNavigationProps) => {
  Alert.alert('Are You Sure To Log Out?', '', [
    {
      text: 'No',
      isPreferred: true,
      style: 'cancel',
      onPress: () => {},
    },
    {
      text: 'Yes',
      style: 'default',
      onPress: () => {
        clearStorage().then(() => {
          navigation.reset({index: 1, routes: [{name: 'loginStack'}]});
        });
      },
    },
  ]);
};
