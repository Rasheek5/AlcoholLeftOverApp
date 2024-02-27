import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginStackParam} from '.';
import {Login, SignUp} from '../modules';
const Stack = createNativeStackNavigator<LoginStackParam>();
export const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signUp" component={SignUp} />
    </Stack.Navigator>
  );
};
