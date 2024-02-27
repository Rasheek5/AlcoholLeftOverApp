import {TouchableOpacity} from 'react-native';
import React from 'react';
import {BackIcon} from '../../assets';
import {useNavigation} from '@react-navigation/native';

export const BackBtn = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <BackIcon />
    </TouchableOpacity>
  );
};
