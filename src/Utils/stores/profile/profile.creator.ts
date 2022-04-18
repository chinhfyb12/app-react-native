import {IProfileDto} from './profile.dto';
import {
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
export function updatePassword(password: string): IUpdatePasswordRequestAction {
  return {
    type: ProfileTypes.UPDATE_PASSWORD_REQUEST,
    password,
  };
}
export function updatePasswordSuccess(): IUpdatePasswordSuccessAction {
  return {
    type: ProfileTypes.UPDATE_PASSWORD_SUCCESS,
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
