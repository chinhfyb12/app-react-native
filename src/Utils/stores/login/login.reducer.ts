import {ILoginState} from './login.dto';
import {LoginActions, LoginTypes} from './login.type';

const initialState: ILoginState = {
  loading: false,
};

export function loginReducer(
  state = initialState,
  action: LoginActions,
): ILoginState {
  switch (action.type) {
    case LoginTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LoginTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action?.data,
      };
    case LoginTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action?.error,
      };
    case LoginTypes.CLEAR_MESSAGE_ERROR:
      return {
        ...state,
        error: undefined,
      };
    default:
      return state;
  }
}
