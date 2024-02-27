import React, {useEffect} from 'react';
import {Router} from './navigation';
import {Context} from './context';
import {
  clearAllNotification,
  createNotificationChanel,
  firebaseMessagingHandler,
} from '.';

export function App(): React.JSX.Element {
  useEffect(() => {
    clearAllNotification();
    createNotificationChanel();
    firebaseMessagingHandler.handleNotificationPermission();
    const unsubscribe = firebaseMessagingHandler.onMessage();
    return unsubscribe;
  }, []);

  return (
    <Context>
      <Router />
    </Context>
  );
}
