import {axisoInstance} from '.';
import {handleAxiosError} from '../helper';
import {I_UPLOAD_LEFTOVER_API, ILeftOver, ILEFTOVER_API} from '../interfaces';

export const uploadLeftOverApi = (data: ILeftOver, forEdit?: boolean) => {
  return new Promise<I_UPLOAD_LEFTOVER_API>(async (resolve, reject) => {
    let url = `/leftOver/${forEdit ? 'update' : 'upload'}`;
    let body = {
      ...data,
      forEdit,
    };

    try {
      const res = forEdit
        ? await axisoInstance.patch<I_UPLOAD_LEFTOVER_API>(url, body)
        : await axisoInstance.post<I_UPLOAD_LEFTOVER_API>(url, body);

      if (res?.data?.statusCode == 200) {
        return resolve(res.data);
      }
      return reject(res.data);
    } catch (err) {
      return handleAxiosError(err, reject);
    }
  });
};

export const getLeftOversByIdApi = (
  userId: string,
  userType: string,
  searchTerm: string,
) => {
  return new Promise<ILEFTOVER_API>(async (resolve, reject) => {
    try {
      const res = await axisoInstance.get<ILEFTOVER_API>(
        '/leftOver/getLefoverByUserId',
        {
          params: {
            userId,
            userType,
            searchTerm,
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

export const deleteLeftOversByIdApi = (id: string) => {
  return new Promise<ILEFTOVER_API>(async (resolve, reject) => {
    try {
      const res = await axisoInstance.delete<ILEFTOVER_API>(
        '/leftOver/delete',
        {
          params: {id},
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
