import {
  Asset,
  ImageLibraryOptions,
  launchImageLibrary as RnLaunchImageLibray,
  launchCamera as RnLaunchCamera,
  CameraOptions,
} from 'react-native-image-picker';

export interface IOptions extends Partial<ImageLibraryOptions> {
  allowMultiple?: boolean;
}

export interface ICameraOptions extends Partial<CameraOptions> {
  allowMultiple?: boolean;
}

export const launchImageLibrary = async (options?: IOptions) => {
  return new Promise<Asset[] | Asset>(async (resolve, reject) => {
    const result = await RnLaunchImageLibray({
      mediaType: 'photo',
      presentationStyle: 'fullScreen',
      ...options,
      selectionLimit: 1,
    });
    if (!result.errorMessage && result.assets)
      resolve(
        options?.allowMultiple == false ? result.assets[0] : result.assets,
      );
    reject(result);
  });
};

export const launchCamera = (options?: ICameraOptions) => {
  return new Promise<Asset[] | Asset>(async (resolve, reject) => {
    const result = await RnLaunchCamera({
      mediaType: 'photo',
      presentationStyle: 'fullScreen',
      ...options,
    });

    if (!result.errorMessage && result.assets) resolve(result.assets[0]);
    reject(result);
  });
};
