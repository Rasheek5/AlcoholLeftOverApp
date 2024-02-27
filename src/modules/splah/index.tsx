import React, {useEffect} from 'react';
import {Container} from '../../common';
import {View, Image} from 'react-native';
import {ImagePaths} from '../../assets';
import styles from './styles';
import {handleSessionNavigation, retrieveSession} from '../../helper';
import {USER_SESSION} from '../../constants/keyStores';
import {useNavigation} from '@react-navigation/native';
import {RouterStackNavigationProps} from '../../navigation';
import {useAuthContext} from '../../context';
import {IUser} from '../../interfaces';

export const SplahScreen = () => {
  const navigation = useNavigation<RouterStackNavigationProps>();
  const [_, setAuthContext] = useAuthContext();

  const validateLogin = async () => {
    retrieveSession<IUser>(USER_SESSION)
      .then(data => {
        setAuthContext(data);
        setTimeout(() => {
          handleSessionNavigation(data as IUser, navigation);
        }, 2000);
      })
      .catch(err => {
        setTimeout(() => {
          navigation.navigate('loginStack', {screen: 'login'});
        }, 2000);
      });
  };

  useEffect(() => {
    validateLogin();
  }, []);

  return (
    <Container styles={styles.container}>
      <View>
        <Image source={ImagePaths.appLogo} style={styles.logo} />
      </View>
    </Container>
  );
};
