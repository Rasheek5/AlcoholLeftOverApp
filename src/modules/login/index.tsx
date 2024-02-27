import React, {useEffect, useState} from 'react';
import {TextView, TextField} from '../../components';
import {Button, Container} from '../../common';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {RouterStackNavigationProps} from '../../navigation';
import {PasswordTextField} from '../../components/passwordTextField';
import {Formik} from 'formik';
import {loginValidationSchema} from '../../validations';
import {loginApi} from '../../api';
import {IToast} from '../../interfaces';
import {
  getFcmToken,
  handleSessionNavigation,
  toastHandleForApi,
} from '../../helper';
import {useAuthContext} from '../../context';

export const Login = () => {
  const [showToast, setShowToast] = useState<IToast>({visible: false});
  const [loading, setLoading] = useState(false);
  const [fcmToken, setFcmToken] = useState('');

  const navigation = useNavigation<RouterStackNavigationProps>();

  const [_, setAuthContext] = useAuthContext();

  const submitHandler = async (values: {email: string; password: string}) => {
    try {
      const {email, password} = values;
      setLoading(true);
      const res = await loginApi(email, password, fcmToken);
      setLoading(false);
      const {result} = res;
      setAuthContext(result);
      handleSessionNavigation(result, navigation);
    } catch (err) {
      setLoading(false);
      toastHandleForApi({
        res: err,
        setShowToast,
      });
    }
  };

  useEffect(() => {
    getFcmToken().then(res => {
      setFcmToken(res);
    });
  }, []);

  const _renderText = () => {
    return <TextView style={styles.headerText}>Login</TextView>;
  };

  const _renderTextFields = () => {
    return (
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={values => {
          submitHandler(values);
        }}>
        {({handleChange, handleSubmit, values, errors}) => (
          <>
            <TextField
              label="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              error={errors.email}
            />
            <PasswordTextField
              setValue={handleChange('password')}
              value={values.password}
              rootViewStyle={{
                marginBottom: 15,
              }}
              error={errors.password}
            />
            <Button onPress={handleSubmit} loading={loading}>
              Submit
            </Button>
          </>
        )}
      </Formik>
    );
  };

  const _renderSignUp = () => {
    return (
      <TextView
        style={styles.dontHaveAccount}
        btnType="button"
        onPress={() => {
          navigation.navigate('loginStack', {screen: 'signUp'});
        }}>
        Don't have an account ? Sign Up here
      </TextView>
    );
  };

  return (
    <Container
      styles={styles.rootView}
      toastProps={{toast: showToast, setToast: setShowToast}}>
      {_renderText()}
      {_renderTextFields()}
      {_renderSignUp()}
    </Container>
  );
};
