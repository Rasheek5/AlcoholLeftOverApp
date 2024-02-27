import React from 'react';
import {Dimensions, Platform, StyleProp, View, ViewStyle} from 'react-native';
import ReactNativeModal from 'react-native-modal';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

interface IModal {
  isModalVisible?: boolean;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function Modal({children, isModalVisible, style}: IModal) {
  return (
    <ReactNativeModal
      style={{margin: 10, marginBottom: '4%'}}
      isVisible={isModalVisible}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}>
      <View style={[{flex: 1, margin: 0, padding: 0}, style]}>{children}</View>
    </ReactNativeModal>
  );
}
