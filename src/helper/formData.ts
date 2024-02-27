import {Asset} from 'react-native-image-picker';

export const setFormDataForImage = (imageData: Asset): FormData => {
  const formData = new FormData();

  formData.append('image', {
    uri: imageData.uri,
    type: imageData.type,
    name: imageData.fileName,
  });

  return formData;
};
