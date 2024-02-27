import {AxiosError} from 'axios';
import {IAXIOS_RESPONSE} from '../interfaces';

export const handleAxiosError = (err: any, reject: (reason?: any) => void) => {
  const error = err as AxiosError;
  let res;

  if (error?.response?.data) {
    const data = error?.response?.data as IAXIOS_RESPONSE;
    res = {
      result: data?.result ?? null,
      errorMessage: data?.errorMessage ?? 'Something Went Wrong',
      statusCode: data?.statusCode ?? 0,
      statusMessage: data?.statusMessage,
    };
  } else {
    res = {
      result: null,
      errorMessage: 'Something Went Wrong',
      statusCode: 0,
      statusMessage: undefined,
    };
  }

  reject(res);
};
