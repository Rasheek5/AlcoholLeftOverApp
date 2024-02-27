import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Modal, TextView} from '../../components';
import styles from './styles';
import {Divider} from '@react-native-material/core';

interface IImagePickerModal {
  visible?: boolean;
  openCamera?: () => any;
  openGalley?: () => any;
  onCancel?: () => any;
}

export const ImagePickerModal = ({
  openGalley,
  onCancel,
  openCamera,
  visible,
}: IImagePickerModal) => {
  const _renderBtn = (
    label: string,
    onPress: () => void,
    fontBolder?: boolean,
  ) => {
    return (
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <TextView
          style={[styles.btnLabel, {fontWeight: fontBolder ? '500' : '400'}]}>
          {label}
        </TextView>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      isModalVisible={visible}
      style={{justifyContent: 'flex-end', margin: 0}}>
      <View style={styles.btnWrapper}>
        {_renderBtn('Camera', () => openCamera && openCamera())}
        <Divider />
        {_renderBtn('Photo Library', () => openGalley && openGalley())}
      </View>
      <View style={[styles.btnWrapper, styles.marginTop]}>
        {_renderBtn('Cancel', () => onCancel && onCancel(), true)}
      </View>
    </Modal>
  );
};
