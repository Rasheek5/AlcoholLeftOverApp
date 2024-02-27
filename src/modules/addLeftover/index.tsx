import React, {useEffect, useRef, useState} from 'react';
import {Button, Container, DatePicker, UploadImageField} from '../../common';
import styles from './styles';
import {Dropdown, KeyboardAwareScrollView, TextField} from '../../components';
import {Formik, FormikProps} from 'formik';
import {addLeftOberValidationSchema} from '../../validations';
import {
  deleteLeftOversByIdApi,
  getAllUsersApi,
  uploadImageApi,
  uploadLeftOverApi,
} from '../../api';
import {IDropdown, ILeftOver, ILeftOverField, IToast} from '../../interfaces';
import {
  renderUserNameString,
  setFormDataForImage,
  toastHandleForApi,
} from '../../helper';
import {Asset} from 'react-native-image-picker';
import {useAuthContext} from '../../context';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {MainStackParam} from '../../navigation';
import {Customer} from '../../constants';
import {EditIcon, TrashIcon} from '../../assets';

export const AddLeftover = () => {
  const [userTypesItems, setUserTypesItems] = useState<IDropdown[]>([]);
  const [loading, setLoading] = useState({fetch: false, error: false});
  const [authContext] = useAuthContext();
  const [showToast, setShowToast] = useState<IToast>({visible: false});
  const navigation = useNavigation();
  const formRef = useRef<FormikProps<ILeftOverField>>(null);
  const {params} = useRoute<RouteProp<MainStackParam, 'editLeftOver'>>();
  const [isNewImagePicked, setIsNewImagePicked] = useState(false);
  const forEdit = params?.data ? true : false;
  const defaultDateForPicker = new Date();
  defaultDateForPicker.setMonth(defaultDateForPicker.getMonth() + 1);
  const offLoading = () => {
    setLoading({fetch: false, error: false});
  };

  const setValuesForApi = (data: ILeftOverField, image: string) => {
    return {
      comments: data.comments,
      customerId: data?.customerName,
      image,
      uploadedBy: authContext?._id,
      brandName: data?.brandName,
      expiryDate: data.expiryDate!,
      quantity: data?.quantity,
      _id: params?.data?._id ?? '',
      forEdit,
    };
  };

  const fetchAllCustomers = () => {
    getAllUsersApi(Customer).then(res => {
      const {result} = res;
      let data: IDropdown[] = [];

      result?.forEach(item => {
        data.push({label: renderUserNameString(item), value: item?._id ?? ''});
      });

      setUserTypesItems(data);
    });
  };

  const hitUploadApi = (image: Asset, data: ILeftOverField) => {
    setLoading({fetch: true, error: false});
    const formData = setFormDataForImage(image);

    uploadImageApi(formData)
      .then(res => uploadLeftOvers(setValuesForApi(data, res.result.path)))
      .catch(err => {
        offLoading();

        toastHandleForApi({res: err, setShowToast: setShowToast});
      });
  };

  const uploadLeftOvers = (data: ILeftOver) => {
    if (!loading.fetch) setLoading({fetch: true, error: false});
    uploadLeftOverApi(data, forEdit)
      .then(res => {
        offLoading();
        if (!forEdit) {
          formRef?.current?.resetForm();
          formRef?.current?.setErrors({});
        }

        toastHandleForApi({
          res: res,
          setShowToast: setShowToast,
          onHide: () => {
            navigation.goBack();
          },
        });
      })
      .catch(err => {
        offLoading();
        toastHandleForApi({res: err, setShowToast: setShowToast});
      });
  };

  const deleteApi = () => {
    setLoading({fetch: false, error: true});
    deleteLeftOversByIdApi(params?.data?._id ?? '')
      .then(res => {
        toastHandleForApi({
          res: res,
          setShowToast: setShowToast,
          onHide: () => {
            navigation.goBack();
          },
        });
      })
      .catch(err => {
        offLoading();
        toastHandleForApi({res: err, setShowToast: setShowToast});
      });
  };

  useEffect(() => {
    fetchAllCustomers();
  }, []);

  const setImageUlr = () => {
    const image = params?.data?.image;
    if (image) {
      let data: Asset = {fileName: image, uri: image};
      return data;
    }
    return undefined;
  };

  const setExpiryDate = () => {
    const date = params?.data?.expiryDate;
    return date ? new Date(date) : null;
  };

  const _renderFields = () => {
    return (
      <Formik
        innerRef={formRef}
        validationSchema={addLeftOberValidationSchema}
        initialValues={{
          image: setImageUlr() ?? undefined,
          customerName: params?.data?.customerId ?? '',
          comments: params?.data?.comments ?? '',
          quantity: params?.data?.quantity ?? '',
          expiryDate: setExpiryDate(),
          brandName: params?.data?.brandName ?? '',
        }}
        onSubmit={values => {
          if (forEdit) {
            return isNewImagePicked
              ? hitUploadApi(values.image!, values)
              : uploadLeftOvers(setValuesForApi(values, params?.data?.image));
          }

          return hitUploadApi(values.image!, values);
        }}>
        {({handleChange, values, errors, handleSubmit, setValues}) => (
          <>
            <UploadImageField
              selectedImage={values.image}
              setSelectedImage={(e: any) => {
                setValues({...values, image: e});
                forEdit && setIsNewImagePicked(true);
              }}
              error={errors.image ?? ''}
            />
            <TextField
              label="Brand Name"
              value={values.brandName}
              onChangeText={handleChange('brandName')}
              error={errors.brandName}
            />
            <TextField
              label="Number Of Quantity"
              value={values.quantity}
              onChangeText={handleChange('quantity')}
              error={errors.quantity}
              keyboardType="decimal-pad"
              maxLength={2}
            />
            <DatePicker
              label="Select Expiry date"
              error={errors.expiryDate}
              value={values.expiryDate}
              minimumDate={defaultDateForPicker}
              defaultDate={defaultDateForPicker}
              onConfirm={date => {
                setValues({...values, expiryDate: date});
              }}
            />
            <Dropdown
              setValue={handleChange('customerName')}
              value={values.customerName}
              items={userTypesItems}
              setItems={setUserTypesItems}
              placeholder="Select Customer"
              searchPlaceholder="Search Customer Name"
              error={errors.customerName}
            />

            <TextField
              label="Comments"
              multiline
              style={styles.commentTextInput}
              value={values.comments}
              onChangeText={handleChange('comments')}
              error={errors.comments}
            />
            {!loading.error && (
              <Button
                onPress={handleSubmit}
                loading={loading.fetch}
                btnType="buttonWithIcon"
                label={forEdit ? 'Edit' : 'Submit'}
                rightIcon={forEdit ? <EditIcon /> : <></>}
              />
            )}
          </>
        )}
      </Formik>
    );
  };

  const _renderDeleteBtn = () => {
    if (!forEdit || loading.fetch) return <></>;
    return (
      <Button
        onPress={() => deleteApi()}
        loading={loading.error}
        style={styles.deleteBtn}
        btnType="buttonWithIcon"
        rightIcon={<TrashIcon />}
        label="Delete"
      />
    );
  };

  return (
    <KeyboardAwareScrollView>
      <Container
        styles={styles.container}
        toastProps={{toast: showToast, setToast: setShowToast}}>
        {_renderFields()}
        {_renderDeleteBtn()}
      </Container>
    </KeyboardAwareScrollView>
  );
};
