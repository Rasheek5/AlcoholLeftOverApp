import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouterStackParam} from '.';
import {LoginStack} from './loginStack';
import {MainStack} from './mainStack';
import {SplahScreen} from '../modules';
import {colors} from '../theme';

export function Router() {
  const Stack = createNativeStackNavigator<RouterStackParam>();

  return (
    <NavigationContainer
      theme={{
        dark: false,
        colors: {
          background: colors.primaryBackground,
          primary: colors.primaryBackground,
          card: colors.primaryBackground,
          text: colors.black,
          border: colors.primaryBackground,
          notification: colors.watermelonRed,
        },
      }}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="splahScreem">
        <Stack.Screen name="splahScreem" component={SplahScreen} />
        <Stack.Screen name="loginStack" component={LoginStack} />
        <Stack.Screen name="mainStack" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
