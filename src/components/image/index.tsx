import {Image as RnImage, ImageProps} from 'react-native';
import React from 'react';
import {colors} from '../../theme';
import {FastImage} from '..';
import styles from './styles';

interface props extends ImageProps {
  useFastImage?: boolean;
  uri?: string;
}

export const Image = (props: props) => {
  const {style, useFastImage, uri, ...rest} = props;

  if (useFastImage) {
    return <FastImage uri={uri ?? ''} style={[styles.image, style]} />;
  }

  return <RnImage style={[styles.image, style]} {...rest} />;
};
