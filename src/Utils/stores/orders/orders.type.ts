import {IOrderDto} from './orders.dto';

export enum OrdersTypes {
  CREATE_ORDER_REQUEST = 'orders/CREATE_ORDER_REQUEST',
  CREATE_ORDER_SUCCESS = 'orders/CREATE_ORDER_SUCCESS',
  CREATE_ORDER_FAILURE = 'orders/CREATE_ORDER_FAILURE',

  CLEAR_MESSAGE_ERROR = 'orders/CLEAR_MESSAGE_ERROR',
}

export interface ICreateOrderRequestAction {
  type: OrdersTypes.CREATE_ORDER_REQUEST;
  order: IOrderDto;
}
export interface ICreateOrderSuccessAction {
  type: OrdersTypes.CREATE_ORDER_SUCCESS;
  message?: string;
}
export interface ICreateOrderFailureAction {
  type: OrdersTypes.CREATE_ORDER_FAILURE;
  error?: any;
}
export interface IClearMessageErrorAction {
  type: OrdersTypes.CLEAR_MESSAGE_ERROR;
}

export type OrdersActions =
  | ICreateOrderRequestAction
  | ICreateOrderSuccessAction
  | ICreateOrderFailureAction
  | IClearMessageErrorAction;
