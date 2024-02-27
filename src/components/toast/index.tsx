import React, {useEffect} from 'react';
import RnToast, {
  BaseToast,
  ErrorToast,
  ToastConfig,
  ToastProps,
} from 'react-native-toast-message';
import {IToast} from '../../interfaces';
import {View} from 'react-native';
import styles from './toast.styles';

const toastConfig: ToastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={styles.succesToast}
      contentContainerStyle={styles.contentContainerStyle}
      text1Style={styles.text1Style}
    />
  ),

  error: props => (
    <ErrorToast
      {...props}
      style={styles.errorToast}
      text1Style={styles.text1Style}
    />
  ),
  warning: props => {
    return <View></View>;
  },
};

export interface ToastCompProps extends ToastProps {
  toast?: IToast;
  setToast?: React.Dispatch<React.SetStateAction<IToast>>;
}

export const Toast = ({
  toast,
  setToast,
  onHide,
  onPress,
  ...rest
}: ToastCompProps) => {
  const resetToast = () => {
    setToast && setToast({message: '', visible: false});
  };

  useEffect(() => {
    if (toast?.visible) {
      const {type, message, subText, onHide, onPress, ...rest} = toast;
      RnToast.show({
        type: type,
        text1: message,
        text2: subText,
        visibilityTime: 2000,
        onHide: () => {
          resetToast();
          onHide && onHide();
        },
        onPress: () => {
          resetToast();
          onPress && onPress();
        },
        ...rest,
      });
    }
  }, [toast]);

  return (
    <RnToast
      config={toastConfig}
      onHide={() => {
        resetToast();
        onHide && onHide();
      }}
      onPress={() => {
        resetToast();
        onPress && onPress();
      }}
      position="bottom"
      {...rest}
    />
  );
};
