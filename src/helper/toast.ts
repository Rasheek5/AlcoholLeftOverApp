import {ToastCompProps} from '../components';
import {IAXIOS_RESPONSE, IToast} from '../interfaces';

export interface toastHandleForApi extends ToastCompProps {
  setShowToast: React.Dispatch<React.SetStateAction<IToast>>;
  res: any;
}

export interface IToastHandle {
  setShowToast: React.Dispatch<React.SetStateAction<IToast>>;
  message?: string;
  forError?: boolean;
  type?: 'error' | 'success';
}

export const toastHandleForApi = (options: toastHandleForApi) => {
  const {setShowToast, res} = options;
  const response: IAXIOS_RESPONSE = {
    result: res?.result,
    errorMessage: res?.errorMessage,
    statusCode: res?.statusCode,
    statusMessage: res?.statusMessage,
  };

  if (response.statusCode !== 200) {
    return setShowToast({
      ...options,
      visible: true,
      type: 'error',
      message: response?.errorMessage ?? 'Some Thing Went Wrong',
    });
  }

  setShowToast({
    ...options,
    visible: true,
    type: 'success',
    message: response?.statusMessage ?? 'Success',
  });
};

export const toastHandler = ({
  setShowToast,
  forError,
  message,
}: IToastHandle) => {
  if (forError) {
    return setShowToast({
      visible: true,
      type: 'error',
      message: message ?? 'Some Thing Went Wrong',
    });
  }

  return setShowToast({
    visible: true,
    type: 'success',
    message: message ?? 'Success',
  });
};
