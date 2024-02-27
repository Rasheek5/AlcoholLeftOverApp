import React from 'react';
import {Container} from '../../common';
import {colors} from '../../theme';
import styles from './contentViewer.styles';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {MainStackParam} from '../../navigation';
import {TouchableOpacity} from 'react-native';
import {CloseIcon} from '../../assets';
import {FastImage} from '../../components';

export const ImageViewer = () => {
  const {params} = useRoute<RouteProp<MainStackParam, 'imagViewer'>>();
  const {url} = params;
  const navigation = useNavigation();

  const _renderImage = () => {
    if (!url) return <></>;
    return <FastImage uri={url} style={styles.imageStles} />;
  };

  const _renderClose = () => {
    return (
      <TouchableOpacity
        style={styles.closeIcon}
        onPress={() => {
          navigation.goBack();
        }}>
        <CloseIcon />
      </TouchableOpacity>
    );
  };

  return (
    <>
      {_renderClose()}
      <Container
        styles={styles.root}
        statusBarHidden={true}
        statusBarBg={colors.black}>
        {_renderImage()}
      </Container>
    </>
  );
};
