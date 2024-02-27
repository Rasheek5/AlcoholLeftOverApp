import React from 'react';
import styles from './button.styles';
import {StyleProp, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {TextView} from '../../components';
import {ActivityIndicator, HStack} from '@react-native-material/core';
import {colors} from '../../theme';

interface IButton {
  children?: string | React.ReactNode;
  onPress?: () => any;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
  btnType?: 'string' | 'buttonWithIcon' | 'jsx';
  label?: string;
  leftIcon?: React.JSX.Element;
  rightIcon?: React.JSX.Element;
}

export const Button = (props: IButton) => {
  const {
    children,
    onPress,
    textStyle,
    style,
    loading,
    btnType,
    label,
    leftIcon,
    rightIcon,
  } = props;

  const _renderLoader = () => {
    return <ActivityIndicator size="small" color={colors.primaryBackground} />;
  };

  const _renderChild = () => {
    if (btnType == 'buttonWithIcon') {
      return (
        <HStack style={styles.btnWithLabel}>
          {loading ? (
            _renderLoader()
          ) : (
            <>
              {leftIcon && leftIcon}
              <TextView
                style={[styles.titleStyle, styles.btnWithLabelText, textStyle]}>
                {label}
              </TextView>
              {rightIcon && rightIcon}
            </>
          )}
        </HStack>
      );
    }

    if (typeof children == 'string')
      return (
        <TextView style={[styles.titleStyle, textStyle]}>
          {loading ? _renderLoader() : children}
        </TextView>
      );
    else return children;
  };

  return (
    <TouchableOpacity
      style={[styles.contentContainerStyle, style]}
      disabled={loading}
      onPress={() => {
        onPress && onPress();
      }}>
      {_renderChild()}
    </TouchableOpacity>
  );
};
