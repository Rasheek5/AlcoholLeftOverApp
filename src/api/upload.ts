import {axisoInstance} from '.';
import {handleAxiosError} from '../helper';
import {IUPLOAD_FILE_API} from '../interfaces';

export const uploadImageApi = (formData: FormData) => {
  return new Promise<IUPLOAD_FILE_API>(async (resolve, reject) => {
    try {
      const res = await axisoInstance.post<IUPLOAD_FILE_API>(
        '/upload/image',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
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
