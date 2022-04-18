import {IProfileState} from './profile.dto';
import {ProfileActions, ProfileTypes} from './profile.type';

const initialState: IProfileState = {
  loading: false,
};

export function profileReducer(
  state = initialState,
  action: ProfileActions,
): IProfileState {
  switch (action.type) {
    case ProfileTypes.GET_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ProfileTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.profile,
      };
    case ProfileTypes.GET_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action?.error,
      };
    case ProfileTypes.UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ProfileTypes.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ProfileTypes.UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action?.error,
      };
    case ProfileTypes.UPDATE_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ProfileTypes.UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ProfileTypes.UPDATE_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action?.error,
      };
    case ProfileTypes.CLEAR_PROFILE:
      return {
        ...state,
        loading: false,
        profile: undefined,
      };
    default:
      return state;
  }
}
