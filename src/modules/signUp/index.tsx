import React, {useEffect, useState} from 'react';
import {Button, Container} from '../../common';
import {
  Dropdown,
  KeyboardAwareScrollView,
  TextField,
  TextView,
} from '../../components';
import {VStack} from '@react-native-material/core';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {PasswordTextField} from '../../components/passwordTextField';
import {Formik} from 'formik';
import {signUpValidationSchema} from '../../validations';
import {RouterStackNavigationProps} from '../../navigation';
import {registerApi} from '../../api';
import {IRegisterApiParams, IToast} from '../../interfaces';
import {
  getFcmToken,
  handleSessionNavigation,
  toastHandleForApi,
} from '../../helper';
import {useAuthContext} from '../../context';

export const SignUp = () => {
  const [userTypesItems, setUserTypesItems] = useState([
    {label: 'Customer', value: 'customer'},
    {label: 'Bartender', value: 'bartender'},
  ]);
  const [showToast, setShowToast] = useState<IToast>({visible: false});
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<RouterStackNavigationProps>();
  const [fcmToken, setFcmToken] = useState('');
  const [_, setAuthContext] = useAuthContext();

  useEffect(() => {
    getFcmToken().then(res => {
      setFcmToken(res);
    });
  }, []);

  const _renderSignUp = () => {
    return (
      <VStack style={styles.headerStack}>
        <TextView style={styles.header}>Sign Up</TextView>
        <TextView style={styles.subheader}>
          Please provide us with few more details
        </TextView>
      </VStack>
    );
  };

  const submitHandler = (values: IRegisterApiParams) => {
    setLoading(true);
    registerApi(values,fcmToken)
      .then(res => {
        const {result} = res;

        setLoading(false);

        setAuthContext(result);

        handleSessionNavigation(result, navigation);
      })
      .catch(err => {
        setLoading(false);
        toastHandleForApi({
          res: err,
          setShowToast,
        });
      });
  };

  const _renderTextFields = () => {
    return (
      <>
        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={{
            email: '',
            password: '',
            firstName: '',
            secondName: '',
            userType: '',
          }}
          onSubmit={values => {
            submitHandler(values);
          }}>
          {({handleChange, values, errors, handleSubmit}) => (
            <>
              <TextField
                label="First Name"
                value={values.firstName}
                error={errors.firstName}
                onChangeText={handleChange('firstName')}
              />
              <TextField
                label="Second Name"
                value={values.secondName}
                error={errors.secondName}
                onChangeText={handleChange('secondName')}
              />
              <TextField
                label="Email Id"
                value={values.email}
                error={errors.email}
                onChangeText={handleChange('email')}
              />
              <PasswordTextField
                value={values.password}
                error={errors.password}
                setValue={handleChange('password')}
                rootViewStyle={{
                  marginBottom: 15,
                }}
              />
              <Dropdown
                placeholder="Select User Type"
                items={userTypesItems}
                setItems={setUserTypesItems}
                setValue={handleChange('userType')}
                value={values.userType}
                error={errors.userType}
              />
              <Button onPress={handleSubmit} loading={loading}>
                Submit
              </Button>
              {_renderBtn()}
            </>
          )}
        </Formik>
      </>
    );
  };

  const _renderBtn = () => {
    return (
      <VStack style={{zIndex: -5}}>
        <TextView
          style={styles.dontHaveAccount}
          btnType="button"
          onPress={() => {
            navigation.goBack();
          }}>
          Already have an account ? Log In here
        </TextView>
      </VStack>
    );
  };

  return (
    <KeyboardAwareScrollView>
      <Container
        styles={styles.container}
        toastProps={{toast: showToast, setToast: setShowToast}}>
        {_renderSignUp()}
        {_renderTextFields()}
      </Container>
    </KeyboardAwareScrollView>
  );
};
