import React from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
} from '@react-native-material/core';
import {colors} from '../../theme';

export const Loader = (props: ActivityIndicatorProps) => {
  return (
    <ActivityIndicator
      size={'large'}
      color={colors.primary}
      style={{marginVertical: 20}}
      {...props}
    />
  );
};
