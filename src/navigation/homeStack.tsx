import React from 'react';
import {Home} from '../modules';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LogoutButton, MenuButton, PushNotiBtn} from '../components';
import {logOutHandler} from '..';
import {useNavigation} from '@react-navigation/native';
import {RouterStackNavigationProps} from '.';

const Stack = createNativeStackNavigator<{home: undefined}>();

export const HomeStack = () => {
  const navigtion = useNavigation<RouterStackNavigationProps>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerTitle: '',
          headerRight: () => (
            <MenuButton
              options={[
                {
                  label: <PushNotiBtn />,
                  onPress: () => {
                    navigtion.navigate('mainStack', {
                      screen: 'notificationTest',
                    });
                  },
                },
                {
                  label: <LogoutButton />,
                  onPress: () => {
                    logOutHandler(navigtion);
                  },
                },
              ]}
            />
          ),
          headerLeft: () => <></>,
        }}
      />
    </Stack.Navigator>
  );
};
