import React from 'react';
import {AddLeftover, Home} from '../modules';
import {MainStackParam, TabStackParam} from './navParamsListTypes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AddIcon, HomeIcon} from '../assets';
import {MainStack} from './mainStack';
import {HomeStack} from './homeStack';
import {colors} from '../theme';

const Tab = createBottomTabNavigator<TabStackParam>();

export const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.primary,
      }}>
      <Tab.Screen
        name="homeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => <HomeIcon color={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="addLeftOvers"
        component={AddLeftover}
        options={{
          tabBarIcon: ({color}) => <AddIcon color={color} />,
          headerTitle: 'Add Leftover',
          headerTitleAlign: 'center',
        }}
      />
    </Tab.Navigator>
  );
};
