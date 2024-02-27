import React from 'react';
import {MainStackParam} from './navParamsListTypes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabStack} from './tabs';
import {HomeStack} from './homeStack';
import {ImageViewer} from '../modules/imageViewer';
import {AddLeftover, NotificationScreen} from '../modules';
import {BackBtn} from '../components';

const Stack = createNativeStackNavigator<MainStackParam>();

export const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="tabStack" component={TabStack} />
      <Stack.Screen name="homeStack" component={HomeStack} />
      <Stack.Screen
        name="editLeftOver"
        component={AddLeftover}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          title: 'Edit Details',
          headerLeft: () => <BackBtn />,
        }}
      />
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="imagViewer" component={ImageViewer} />
        <Stack.Screen name="notificationTest" component={NotificationScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
