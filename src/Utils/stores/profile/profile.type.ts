import {IProfileDto} from './profile.dto';

export enum ProfileTypes {
  GET_PROFILE_REQUEST = 'profile/GET_PROFILE_REQUEST',
  GET_PROFILE_SUCCESS = 'profile/GET_PROFILE_SUCCESS',
  GET_PROFILE_FAILURE = 'profile/GET_PROFILE_FAILURE',

  UPDATE_PROFILE_REQUEST = 'profile/UPDATE_PROFILE_REQUEST',
  UPDATE_PROFILE_SUCCESS = 'profile/UPDATE_PROFILE_SUCCESS',
  UPDATE_PROFILE_FAILURE = 'profile/UPDATE_PROFILE_FAILURE',

  UPDATE_PASSWORD_REQUEST = 'profile/UPDATE_PASSWORD_REQUEST',
  UPDATE_PASSWORD_SUCCESS = 'profile/UPDATE_PASSWORD_SUCCESS',
  UPDATE_PASSWORD_FAILURE = 'profile/UPDATE_PASSWORD_FAILURE',

  CLEAR_PROFILE = 'profile/CLEAR_PROFILE',
}

export interface IGetProfileRequestAction {
  type: ProfileTypes.GET_PROFILE_REQUEST;
}
export interface IGetProfileSuccessAction {
  type: ProfileTypes.GET_PROFILE_SUCCESS;
  profile: IProfileDto;
}
export interface IGetProfileFailureAction {
  type: ProfileTypes.GET_PROFILE_FAILURE;
  error: string;
}

export interface IUpdateProfileRequestAction {
  type: ProfileTypes.UPDATE_PROFILE_REQUEST;
  profile: IProfileDto;
}
export interface IUpdateProfileSuccessAction {
  type: ProfileTypes.UPDATE_PROFILE_SUCCESS;
}
export interface IUpdateProfileFailureAction {
  type: ProfileTypes.UPDATE_PROFILE_FAILURE;
  error?: string;
}
export interface IUpdatePasswordRequestAction {
  type: ProfileTypes.UPDATE_PASSWORD_REQUEST;
  password: string;
}
export interface IUpdatePasswordSuccessAction {
  type: ProfileTypes.UPDATE_PASSWORD_SUCCESS;
}
export interface IUpdatePasswordFailureAction {
  type: ProfileTypes.UPDATE_PASSWORD_FAILURE;
  error?: string;
}
export interface IClearProfileAction {
  type: ProfileTypes.CLEAR_PROFILE;
}

export type ProfileActions =
  | IGetProfileRequestAction
  | IGetProfileSuccessAction
  | IGetProfileFailureAction
  | IUpdateProfileRequestAction
  | IUpdateProfileSuccessAction
  | IUpdateProfileFailureAction
  | IUpdatePasswordRequestAction
  | IUpdatePasswordSuccessAction
  | IUpdatePasswordFailureAction
  | IClearProfileAction;
