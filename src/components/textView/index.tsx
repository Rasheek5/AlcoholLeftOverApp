import {
  Text as RnText,
  StyleProp,
  TextInputProps,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import stylesheet from './text.styles';

interface ITextView extends TextInputProps {
  btnType?: 'default' | 'button';
  onPress?: () => any;
  btnStyle?: StyleProp<ViewStyle>;
}

export const TextView = (props: ITextView) => {
  const {style, children, btnType, btnStyle, onPress, ...rest} = props;

  const _renderText = () => {
    return (
      <RnText style={[stylesheet.text, style]} {...rest}>
        {children}
      </RnText>
    );
  };

  if (btnType == 'button')
    return (
      <TouchableOpacity
        style={[stylesheet.btn, btnStyle]}
        onPress={() => onPress && onPress()}>
        {_renderText()}
      </TouchableOpacity>
    );

  return _renderText();
};
