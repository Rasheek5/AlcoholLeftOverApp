import {View, Text, Image} from 'react-native';
import React from 'react';
import {HStack} from '@react-native-material/core';
import {TextView} from '..';
import {ImagePaths} from '../../assets';

export const PushNotiBtn = () => {
  return (
    <HStack >
      <TextView>Test Notifications</TextView>
      <Image source={ImagePaths.pushNoti} style={{height: 20, width: 20}} />
    </HStack>
  );
};
