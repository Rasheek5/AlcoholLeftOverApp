import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import styleSheet from './container.styes';
import {Toast, ToastCompProps} from '../../components';

interface IContainerProps {
  children: React.ReactNode;
  styles?: StyleProp<ViewStyle>;
  statusBarHidden?: boolean;
  footer?: React.JSX.Element;
  toastProps?: ToastCompProps;
  statusBarBg?: string;
}

export const Container = ({
  children,
  styles,
  statusBarHidden,
  footer,
  toastProps,
}: IContainerProps) => {
  const _renderChildren = () => {
    return <View style={[{zIndex: -1}, styles]}>{children}</View>;
  };

  return (
    <>
      <SafeAreaView style={[styleSheet.rootView, styles]}>
        <Toast {...toastProps} />
        <StatusBar
          backgroundColor={'white'}
          barStyle={'dark-content'}
          showHideTransition={'fade'}
          hidden={statusBarHidden ?? false}
        />
        {_renderChildren()}
        {footer ? footer : <></>}
      </SafeAreaView>
    </>
  );
};
