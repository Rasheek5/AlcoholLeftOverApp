import {Asset} from 'react-native-image-picker';

export interface ILeftOver {
  image: string;
  customerName?: string;
  comments: string;
  customerId: string;
  uploadedBy: string;
  quantity?: string;
  expiryDate?: Date;
  brandName?: string;
  forEdit?: boolean;
  _id?: string;
}

export interface ILeftOverField {
  image: Asset | undefined;
  customerName: string;
  comments: string;
  quantity?: string;
  expiryDate?: Date | undefined | null;
  brandName?: string;
}
