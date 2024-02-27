import {axisoInstance} from '.';
import {handleAxiosError} from '../helper';
import {IGET_ALL_USERS_API} from '../interfaces';

export const getAllUsersApi = (userType: string) => {
  return new Promise<IGET_ALL_USERS_API>(async (resolve, reject) => {
    try {
      const res = await axisoInstance.get<IGET_ALL_USERS_API>(
        '/user/getUsersList',
        {
          params: {
            userType,
          },
        },
      );

      if (res?.data?.statusCode == 200) {
        return resolve(res.data);
      }
      return reject(res.data);
    } catch (err) {
      return handleAxiosError(err, reject);
    }
  });
};
