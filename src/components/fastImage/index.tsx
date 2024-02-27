import React from 'react';
import {ImageStyle, StyleProp} from 'react-native';
import Image from 'react-native-image-progress';
import {colors} from '../../theme';

interface props {
  uri: string;
  style?: StyleProp<ImageStyle>;
  indicatorSize?: number;
  resizeMode?: 'stretch' | 'center' | 'contain' | 'cover' | 'repeat';
}

export const FastImage = ({uri, style, indicatorSize, resizeMode}: props) => {
  return (
    <Image
      source={{uri: uri}}
      indicatorProps={{
        size: indicatorSize ?? 30,
        borderWidth: 0,
        color: colors.blue,
      }}
      resizeMode={resizeMode ?? 'contain'}
      style={style}
    />
  );
};
