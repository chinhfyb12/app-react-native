import {IProfileDto} from '../profile/profile.dto';
import {IRegisterDto} from './register.dto';

export enum RegisterTypes {
  REGISTER_REQUEST = 'register/REGISTER_REQUEST',
  REGISTER_SUCCESS = 'register/REGISTER_SUCCESS',
  REGISTER_FAILURE = 'register/REGISTER_FAILURE',

  CLEAR_REGISTER = 'register/CLEAR_REGISTER',
}

export interface IRegisterRequestAction {
  type: RegisterTypes.REGISTER_REQUEST;
  user: IProfileDto;
}
export interface IRegisterSuccessAction {
  type: RegisterTypes.REGISTER_SUCCESS;
  message?: string;
  user?: IRegisterDto;
}
export interface IRegisterFailureAction {
  type: RegisterTypes.REGISTER_FAILURE;
  error?: any;
}
export interface IClearRegisterAction {
  type: RegisterTypes.CLEAR_REGISTER;
}

export type RegisterActions =
  | IRegisterRequestAction
  | IRegisterSuccessAction
  | IRegisterFailureAction
  | IClearRegisterAction;
