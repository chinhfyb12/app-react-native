import {IChatState} from './chat.dto';
import {ChatActions, ChatTypes} from './chat.type';

const initialState: IChatState = {
  chat: [],
  loading: false,
};

export function chatReducer(
  state = initialState,
  action: ChatActions,
): IChatState {
  switch (action.type) {
    case ChatTypes.GET_CHAT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ChatTypes.GET_CHAT_SUCCESS:
      return {
        ...state,
        chat: action.data,
        loading: false,
      };
    case ChatTypes.GET_CHAT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action?.error,
      };
    case ChatTypes.ADD_CHAT_REQUEST:
      return {
        ...state,
      };
    case ChatTypes.ADD_CHAT_SUCCESS:
      return {
        ...state,
        message: action?.message,
      };
    case ChatTypes.ADD_CHAT_FAILURE:
      return {
        ...state,
        error: action?.error,
      };
    case ChatTypes.CLEAR_CHAT:
      return {
        ...state,
        chat: [],
        error: undefined,
        message: undefined,
      };
    default:
      return state;
  }
}
