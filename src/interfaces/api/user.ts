import {IRESPONSE} from '.';
import {IUser} from '..';

export interface IUSER_API extends IRESPONSE {
  result: IUser;
}

export interface IGET_ALL_USERS_API extends IRESPONSE {
  result: IUser[];
}
