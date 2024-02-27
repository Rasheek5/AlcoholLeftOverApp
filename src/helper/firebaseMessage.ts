import messaging from '@react-native-firebase/messaging';
import {pushTheNotification} from '.';
import {PermissionsAndroid} from 'react-native';

export const getFcmToken = async () => {
  return await messaging().getToken();
};

class FirebaseMessaging {
  handleNotificationPermission = () => {
    return new Promise(async (res, req) => {
      const data = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      if (data) return res(true);
      return req();
    });
  };

  getToken = async () => {
    return getFcmToken();
  };

  onMessage = () => {
    return messaging().onMessage(remoteMessage => {
      pushTheNotification(remoteMessage);
    });
  };

  backgroundMessageHandle = () => {
    return messaging().setBackgroundMessageHandler(async remoteMessage => {
      pushTheNotification(remoteMessage);
    });
  };
}

export const firebaseMessagingHandler = new FirebaseMessaging();
