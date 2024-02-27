export interface IRESPONSE {
  statusCode?: number;
  statusMessage?: string;
  errorMessage?: string;
}

export interface IAXIOS_RESPONSE extends IRESPONSE {
  result: any;
}

export * from './user';
export * from './leftOver';
export * from './upload';
