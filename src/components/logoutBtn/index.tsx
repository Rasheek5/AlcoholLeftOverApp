import React from 'react';
import {RouterStackNavigationProps} from '../../navigation';
import {useNavigation} from '@react-navigation/native';
import {LogoutIcon} from '../../assets';
import {HStack} from '@react-native-material/core';
import {TextView} from '..';

export const LogoutButton = () => {
  const navigation = useNavigation<RouterStackNavigationProps>();
  return (
    <HStack>
      <TextView style={{right: 5}}>Logout</TextView>
      <LogoutIcon />
    </HStack>
  );
};
