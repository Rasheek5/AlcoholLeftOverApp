import {IRESPONSE} from '.';
import {IUploadedFile} from '../file';

export interface IUPLOAD_FILE_API extends IRESPONSE {
  result: IUploadedFile;
}
