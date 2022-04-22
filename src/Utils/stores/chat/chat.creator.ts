import {IChat} from './chat.dto';
import {
  ChatTypes,
  IAddChatFailureAction,
  IAddChatRequestAction,
  IAddChatSuccessAction,
  IClearChatAction,
  IGetChatFailureAction,
  IGetChatRequestAction,
  IGetChatSuccessAction,
} from './chat.type';

export function getChatRequest(userId: string): IGetChatRequestAction {
  return {
    type: ChatTypes.GET_CHAT_REQUEST,
    userId,
  };
}
export function getChatSuccess(data: IChat[]): IGetChatSuccessAction {
  return {
    type: ChatTypes.GET_CHAT_SUCCESS,
    data,
  };
}
export function getChatFailure(error?: any): IGetChatFailureAction {
  return {
    type: ChatTypes.GET_CHAT_FAILURE,
    error,
  };
}
export function addChatRequest(data: IChat): IAddChatRequestAction {
  return {
    type: ChatTypes.ADD_CHAT_REQUEST,
    data,
  };
}
export function addChatSuccess(message?: string): IAddChatSuccessAction {
  return {
    type: ChatTypes.ADD_CHAT_SUCCESS,
    message,
  };
}
export function addChatFailure(error?: any): IAddChatFailureAction {
  return {
    type: ChatTypes.ADD_CHAT_FAILURE,
    error,
  };
}
export function clearChat(): IClearChatAction {
  return {
    type: ChatTypes.CLEAR_CHAT,
  };
}
