import {Asset} from 'react-native-image-picker';
import * as yup from 'yup';

export const addLeftOberValidationSchema = yup.object().shape({
  image: yup.object<Asset>().required('Image is Required'),
  customerName: yup.string().required('Customer Name is Required'),
  comments: yup.string().required('Comments is Required'),
  quantity: yup.string().required('quantity is required'),
  expiryDate: yup.date().required('Expiry Date is required'),
  brandName: yup?.string().required('Brand Name is required'),
});
