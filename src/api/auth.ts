import {IRegisterApiParams} from '../interfaces';
import {IUSER_API} from '../interfaces/api/user';
import {axisoInstance} from './axiosInstance';
import {handleAxiosError} from '../helper';

export const loginApi = (email: string, password: string, fcmToken: string) => {
  return new Promise<IUSER_API>(async (resolve, reject) => {
    try {
      const res = await axisoInstance.post<IUSER_API>('/auth/login', {
        email,
        password,
        fcmToken,
      });

      if (res?.data?.statusCode == 200) {
        return resolve(res.data);
      }
      return reject(res.data);
    } catch (err) {
      return handleAxiosError(err, reject);
    }
  });
};

export const registerApi = (data: IRegisterApiParams, fcmToken: string) => {
  return new Promise<IUSER_API>(async (resolve, reject) => {
    try {
      const {email, firstName, password, secondName, userType} = data;
      const res = await axisoInstance.post<IUSER_API>('/auth/register', {
        email,
        firstName,
        password,
        secondName,
        userType,
        fcmToken,
      });

      if (res?.data?.statusCode == 200) {
        return resolve(res.data);
      }
      return reject(res.data);
    } catch (err) {
      return handleAxiosError(err, reject);
    }
  });
};
