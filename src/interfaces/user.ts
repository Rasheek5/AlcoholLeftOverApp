export interface IUser {
  _id?: string;
  email?: string;
  userType?: string;
  firstName?: string;
  lastName?: string;
}

export interface IRegisterApiParams {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
  userType: string;
}
