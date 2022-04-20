import {IRegisterState} from './register.dto';
import {RegisterActions, RegisterTypes} from './register.type';

const initialState: IRegisterState = {
  loading: false,
};

export function registerReducer(
  state = initialState,
  action: RegisterActions,
): IRegisterState {
  switch (action.type) {
    case RegisterTypes.REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RegisterTypes.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action?.message,
        user: action?.user,
      };
    case RegisterTypes.REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action?.error,
      };
    case RegisterTypes.CLEAR_REGISTER:
      return {
        ...state,
        loading: false,
        error: undefined,
        message: undefined,
      };
    default:
      return state;
  }
}
