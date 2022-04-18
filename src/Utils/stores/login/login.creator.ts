import {ILoginDto, ILoginRequestDto} from './login.dto';
import {
  ClearMessageErrorAction,
  LoginFailureAction,
  LoginRequestAction,
  LoginSuccessAction,
  LoginTypes,
} from './login.type';

export function login(loginDto: ILoginRequestDto): LoginRequestAction {
  return {
    type: LoginTypes.LOGIN_REQUEST,
    loginDto,
  };
}
export function loginSuccess(data: ILoginDto): LoginSuccessAction {
  return {
    type: LoginTypes.LOGIN_SUCCESS,
    data,
  };
}
export function loginFailure(error?: any): LoginFailureAction {
  return {
    type: LoginTypes.LOGIN_FAILURE,
    error,
  };
}
export function clearMessageError(): ClearMessageErrorAction {
  return {
    type: LoginTypes.CLEAR_MESSAGE_ERROR,
  };
}
