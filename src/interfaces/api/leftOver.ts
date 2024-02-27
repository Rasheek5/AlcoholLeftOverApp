import {IRESPONSE} from '.';
import {ILeftOver} from '..';

export interface I_UPLOAD_LEFTOVER_API extends IRESPONSE {
  result: ILeftOver;
}

export interface ILEFTOVER_API extends IRESPONSE {
  result: ILeftOver[];
}
