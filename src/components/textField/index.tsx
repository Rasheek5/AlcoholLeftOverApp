import {StyleProp, TextStyle} from 'react-native';
import React from 'react';
import stylesheet from './textField.styles';
import {TextInput, TextInputProps} from '@react-native-material/core';
import {colors} from '../../theme/colors';
import {TextView} from '..';
import styles from './textField.styles';

interface ITextFieldProps extends TextInputProps {
  leading?: React.JSX.Element;
  suffix?: React.JSX.Element;
  error?: string;
  inputContainerStyle?: StyleProp<TextStyle>;
  label: string;
}

export const TextField = (props: ITextFieldProps) => {
  const {leading, error, style, inputStyle, ...rest} = props;

  return (
    <>
      <TextInput
        variant="outlined"
        inputContainerStyle={[stylesheet.inputContainerStyle, style]}
        inputStyle={[stylesheet.inputStyle, inputStyle]}
        leading={leading}
        color={colors.secondary}
        autoCorrect={false}
        spellCheck={false}
        {...rest}
      />
      {error && <TextView style={styles.error}>{error}</TextView>}
    </>
  );
};
