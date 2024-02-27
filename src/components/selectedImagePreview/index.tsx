import {TouchableOpacity} from 'react-native';
import React from 'react';
import {Asset} from 'react-native-image-picker';
import styles from './styles';
import {HStack, VStack} from '@react-native-material/core';
import {Image, TextView} from '..';

interface ISelectedImagePreview {
  asset?: Asset;
  onChangePress: () => any;
  onRemovePress: any;
  hide?: boolean;
}

export const SelectedImagePreview = ({
  asset,
  onRemovePress,
  onChangePress,
  hide,
}: ISelectedImagePreview) => {
  if (hide) return <></>;

  const _renderBtn = () => {
    return (
      <HStack style={styles.footer} justify="between">
        <TouchableOpacity
          onPress={() => {
            onChangePress && onChangePress();
          }}>
          <TextView style={styles.changePhoto}>Change Photo</TextView>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onRemovePress && onRemovePress();
          }}>
          <TextView style={styles.remove}>Remove</TextView>
        </TouchableOpacity>
      </HStack>
    );
  };

  return (
    <VStack style={{marginBottom: 10}}>
      <Image source={{uri: asset?.uri}} style={styles.image} />
      {_renderBtn()}
    </VStack>
  );
};
