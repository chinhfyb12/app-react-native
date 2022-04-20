import {IProfileDto} from '../profile/profile.dto';
import {IRegisterDto} from './register.dto';
import {
  IClearRegisterAction,
  IRegisterFailureAction,
  IRegisterRequestAction,
  IRegisterSuccessAction,
  RegisterTypes,
} from './register.type';

export function register(user: IProfileDto): IRegisterRequestAction {
  return {
    type: RegisterTypes.REGISTER_REQUEST,
    user,
  };
}
export function registerSuccess(
  message?: string,
  user?: IRegisterDto,
): IRegisterSuccessAction {
  return {
    type: RegisterTypes.REGISTER_SUCCESS,
    message,
    user,
  };
}
export function registerFailure(error?: any): IRegisterFailureAction {
  return {
    type: RegisterTypes.REGISTER_FAILURE,
    error,
  };
}
export function clearRegister(): IClearRegisterAction {
  return {
    type: RegisterTypes.CLEAR_REGISTER,
  };
}
