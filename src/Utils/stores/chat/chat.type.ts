import {IChat} from './chat.dto';

export enum ChatTypes {
  GET_CHAT_REQUEST = 'chat/GET_CHAT_REQUEST',
  GET_CHAT_SUCCESS = 'chat/GET_CHAT_SUCCESS',
  GET_CHAT_FAILURE = 'chat/GET_CHAT_FAILURE',

  ADD_CHAT_REQUEST = 'chat/ADD_CHAT_REQUEST',
  ADD_CHAT_SUCCESS = 'chat/ADD_CHAT_SUCCESS',
  ADD_CHAT_FAILURE = 'chat/ADD_CHAT_FAILURE',

  CLEAR_CHAT = 'chat/CLEAR_CHAT',
}

export interface IGetChatRequestAction {
  type: typeof ChatTypes.GET_CHAT_REQUEST;
  userId: string;
}
export interface IGetChatSuccessAction {
  type: typeof ChatTypes.GET_CHAT_SUCCESS;
  data: IChat[];
}
export interface IGetChatFailureAction {
  type: typeof ChatTypes.GET_CHAT_FAILURE;
  error?: any;
}

export interface IAddChatRequestAction {
  type: typeof ChatTypes.ADD_CHAT_REQUEST;
  data: IChat;
}
export interface IAddChatSuccessAction {
  type: typeof ChatTypes.ADD_CHAT_SUCCESS;
  message?: string;
}
export interface IAddChatFailureAction {
  type: typeof ChatTypes.ADD_CHAT_FAILURE;
  error?: any;
}

export interface IClearChatAction {
  type: typeof ChatTypes.CLEAR_CHAT;
}

export type ChatActions =
  | IGetChatRequestAction
  | IGetChatSuccessAction
  | IGetChatFailureAction
  | IAddChatRequestAction
  | IAddChatSuccessAction
  | IAddChatFailureAction
  | IClearChatAction;
