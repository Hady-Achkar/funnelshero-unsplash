export { RandomImages } from './RandomImages';
export { SearchImages } from './SearchImages';
export { IImage } from './Image';
import { Request } from 'express';

export interface CustomRequest<T> extends Request {
  readonly body: T;
}
export interface IUser {
  readonly email: string;
  readonly fullName: string;
  readonly _id: string;
}
export interface AuthedUser extends Request {
  readonly user: IUser;
}
