import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import {Platform} from 'react-native';
import PushNotification, {Importance} from 'react-native-push-notification';

const channelId = 'main-notification-channel';

export const pushTheNotification = (
  remoteMessage: FirebaseMessagingTypes.RemoteMessage,
) => {
  if (Platform.OS == 'ios') {
    return;
  }

  PushNotification.localNotification({
    channelId: channelId,
    title: remoteMessage.notification?.title,
    message: remoteMessage.notification?.body ?? '',
    picture: remoteMessage?.data?.imageUrl,
    soundName: 'default',
    playSound: true,
  });
};

export const createNotificationChanel = () => {
  return PushNotification.createChannel(
    {
      channelId: channelId,
      channelName: 'Main Notofication channel',
      importance: Importance.HIGH,
      vibrate: true,
      playSound: true,
      soundName: 'default',
    },
    created => {},
  );
};

export const clearAllNotification = () => {
  if (Platform.OS == 'ios') {
    return;
  }
  return PushNotification.cancelAllLocalNotifications();
};
