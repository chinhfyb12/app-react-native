import {ILoginDto, ILoginRequestDto} from './login.dto';

export enum LoginTypes {
  LOGIN_REQUEST = 'login/LOGIN_REQUEST',
  LOGIN_SUCCESS = 'login/LOGIN_SUCCESS',
  LOGIN_FAILURE = 'login/LOGIN_FAILURE',

  CLEAR_MESSAGE_ERROR = 'login/CLEAR_MESSAGE_ERROR',
  CLEAR_DATA = 'login/CLEAR_DATA',
}

export interface LoginRequestAction {
  type: LoginTypes.LOGIN_REQUEST;
  loginDto: ILoginRequestDto;
}
export interface LoginSuccessAction {
  type: LoginTypes.LOGIN_SUCCESS;
  data: ILoginDto;
}
export interface LoginFailureAction {
  type: LoginTypes.LOGIN_FAILURE;
  error?: any;
}
export interface ClearMessageErrorAction {
  type: LoginTypes.CLEAR_MESSAGE_ERROR;
}
export interface ClearDataAction {
  type: LoginTypes.CLEAR_DATA;
}

export type LoginActions =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | ClearMessageErrorAction
  | ClearDataAction;
