import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {TextField, TextView} from '../../components';
import styles from './uploadImage.styles';
import {launchCamera, launchImageLibrary} from '../../helper';
import {Asset} from 'react-native-image-picker';
import {ImagePickerModal} from '..';
import {HStack} from '@react-native-material/core';
import {NextIcon, UploadIcon} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProps} from '../../navigation';

interface IUploadImageField {
  selectedImage?: Asset;
  setSelectedImage: (e: Asset | undefined) => any;
  error?: string;
}

export const UploadImageField = ({
  selectedImage,
  setSelectedImage,
  error,
}: IUploadImageField) => {
  const navigation = useNavigation<MainStackNavigationProps>();
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const hideModal = () => setShowModal(false);

  const openGallary = () => {
    launchImageLibrary({selectionLimit: 1, allowMultiple: false})
      .then(res => {
        setSelectedImage(res as Asset);
        hideModal();
      })
      .catch(err => {
        hideModal();
      });
  };

  const openCamera = () => {
    launchCamera()
      .then(res => {
        setSelectedImage(res as Asset);
        hideModal();
      })
      .catch(err => {
        hideModal();
      });
  };

  const _renderBtn = () => {
    return (
      <HStack style={styles.footer} justify="between">
        <TouchableOpacity
          onPress={() => {
            openModal();
          }}>
          <TextView style={styles.changePhoto}>Change Photo</TextView>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedImage(undefined);
          }}>
          <TextView style={styles.remove}>Remove</TextView>
        </TouchableOpacity>
      </HStack>
    );
  };

  const _renderSelectImage = () => {
    const isImagePicked = selectedImage?.fileName ?? null;

    return (
      <>
        <TouchableOpacity
          onPress={() => {
            isImagePicked
              ? navigation.navigate('imagViewer', {
                  url: selectedImage?.uri ?? '',
                })
              : openModal();
          }}>
          <TextField
            label="Select Image"
            trailing={isImagePicked ? <NextIcon /> : <UploadIcon />}
            editable={false}
            pointerEvents="none"
            error={error}
            value={isImagePicked ?? ''}
          />
        </TouchableOpacity>
        {isImagePicked && _renderBtn()}
      </>
    );
  };

  return (
    <>
      {_renderSelectImage()}
      <ImagePickerModal
        visible={showModal}
        onCancel={() => setShowModal(false)}
        openCamera={openCamera}
        openGalley={openGallary}
      />
    </>
  );
};
