import {IProfileDto, IUpdatePasswordDto} from './profile.dto';
import {
  IClearMessageAction,
  IClearProfileAction,
  IGetProfileFailureAction,
  IGetProfileRequestAction,
  IGetProfileSuccessAction,
  IUpdatePasswordFailureAction,
  IUpdatePasswordRequestAction,
  IUpdatePasswordSuccessAction,
  IUpdateProfileFailureAction,
  IUpdateProfileRequestAction,
  IUpdateProfileSuccessAction,
  ProfileTypes,
} from './profile.type';

export function getProfile(): IGetProfileRequestAction {
  return {
    type: ProfileTypes.GET_PROFILE_REQUEST,
  };
}
export function getProfileSuccess(
  profile: IProfileDto,
): IGetProfileSuccessAction {
  return {
    type: ProfileTypes.GET_PROFILE_SUCCESS,
    profile,
  };
}
export function getProfileFailure(error: string): IGetProfileFailureAction {
  return {
    type: ProfileTypes.GET_PROFILE_FAILURE,
    error,
  };
}
export function updateProfile(
  profile: IProfileDto,
): IUpdateProfileRequestAction {
  return {
    type: ProfileTypes.UPDATE_PROFILE_REQUEST,
    profile,
  };
}
export function updateProfileSuccess(): IUpdateProfileSuccessAction {
  return {
    type: ProfileTypes.UPDATE_PROFILE_SUCCESS,
  };
}
export function updateProfileFailure(
  error?: string,
): IUpdateProfileFailureAction {
  return {
    type: ProfileTypes.UPDATE_PROFILE_FAILURE,
    error,
  };
}
export function updatePassword(
  pwd: IUpdatePasswordDto,
): IUpdatePasswordRequestAction {
  return {
    type: ProfileTypes.UPDATE_PASSWORD_REQUEST,
    pwd,
  };
}
export function updatePasswordSuccess(
  message?: string,
): IUpdatePasswordSuccessAction {
  return {
    type: ProfileTypes.UPDATE_PASSWORD_SUCCESS,
    message,
  };
}
export function updatePasswordFailure(
  error?: string,
): IUpdatePasswordFailureAction {
  return {
    type: ProfileTypes.UPDATE_PASSWORD_FAILURE,
    error,
  };
}
export function clearProfile(): IClearProfileAction {
  return {
    type: ProfileTypes.CLEAR_PROFILE,
  };
}
export function clearMessage(): IClearMessageAction {
  return {
    type: ProfileTypes.CLEAR_MESSAGE,
  };
}
