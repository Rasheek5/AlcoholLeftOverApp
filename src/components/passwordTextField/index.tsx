import {View, Text, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import {TextField} from '../textField';
import {LockIcon} from '../../assets/icons';
import styles from './passwordTextField.styles';
import {TextView} from '..';

interface IPasswordTextField {
  value: string;
  setValue: any;
  bottomLeft?: React.JSX.Element;
  rootViewStyle?: StyleProp<ViewStyle>;
  error?: string;
}

export const PasswordTextField = (props: IPasswordTextField) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const {setValue, value, bottomLeft, rootViewStyle, error} = props;
  return (
    <View style={rootViewStyle}>
      <TextField
        label={'Password'}
        value={value}
        trailing={<LockIcon />}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
        error={error}
      />
      <View style={styles.passwordFieldTextView}>
        {bottomLeft ?? <View />}
        <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
          <TextView style={styles.passwordFieldText}>
            {secureTextEntry ? 'Show Password' : 'Hide Password'}
          </TextView>
        </TouchableOpacity>
      </View>
    </View>
  );
};
