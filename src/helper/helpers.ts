import {IUser} from '../interfaces';

export const renderUserNameString = (data: IUser) => {
  return `${data?.firstName} ${data?.lastName}`;
};
