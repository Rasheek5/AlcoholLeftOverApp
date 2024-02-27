import {KeyboardAvoidingViewProps, Platform, ScrollView} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView as RnKeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors} from '../../theme';

export const KeyboardAwareScrollView = (props: KeyboardAvoidingViewProps) => {
  const {contentContainerStyle, children, ...rest} = props;
  return (
    <RnKeyboardAwareScrollView
      enableOnAndroid={true}
      enableAutomaticScroll={Platform.OS === 'ios'}
      bounces={false}
      contentContainerStyle={[
        contentContainerStyle,
        {
          flex: 1,
          backgroundColor: colors.primaryBackground,
        },
      ]}>
      <ScrollView>{children}</ScrollView>
    </RnKeyboardAwareScrollView>
  );
};
