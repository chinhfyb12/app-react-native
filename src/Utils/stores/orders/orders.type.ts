import {IOrderDto} from './orders.dto';

export enum OrdersTypes {
  CREATE_ORDER_REQUEST = 'orders/CREATE_ORDER_REQUEST',
  CREATE_ORDER_SUCCESS = 'orders/CREATE_ORDER_SUCCESS',
  CREATE_ORDER_FAILURE = 'orders/CREATE_ORDER_FAILURE',

  GET_ORDERS_REQUEST = 'orders/GET_ORDERS_REQUEST',
  GET_ORDERS_SUCCESS = 'orders/GET_ORDERS_SUCCESS',
  GET_ORDERS_FAILURE = 'orders/GET_ORDERS_FAILURE',

  CHECK_OUT_ORDER_REQUEST = 'orders/CHECK_OUT_ORDER_REQUEST',
  CHECK_OUT_ORDER_SUCCESS = 'orders/CHECK_OUT_ORDER_SUCCESS',
  CHECK_OUT_ORDER_FAILURE = 'orders/CHECK_OUT_ORDER_FAILURE',

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
export interface IGetOrderRequestAction {
  type: OrdersTypes.GET_ORDERS_REQUEST;
}
export interface IGetOrderSuccessAction {
  type: OrdersTypes.GET_ORDERS_SUCCESS;
  orders: IOrderDto;
}
export interface IGetOrderFailureAction {
  type: OrdersTypes.GET_ORDERS_FAILURE;
  error?: any;
}
export interface ICheckOutOrderRequestAction {
  type: OrdersTypes.CHECK_OUT_ORDER_REQUEST;
  orderId: string;
  order: IOrderDto;
}
export interface ICheckOutOrderSuccessAction {
  type: OrdersTypes.CHECK_OUT_ORDER_SUCCESS;
  message?: string;
}
export interface ICheckOutOrderFailureAction {
  type: OrdersTypes.CHECK_OUT_ORDER_FAILURE;
  error?: any;
}
export interface IClearMessageErrorAction {
  type: OrdersTypes.CLEAR_MESSAGE_ERROR;
}

export type OrdersActions =
  | ICreateOrderRequestAction
  | ICreateOrderSuccessAction
  | ICreateOrderFailureAction
  | IGetOrderRequestAction
  | IGetOrderSuccessAction
  | IGetOrderFailureAction
  | ICheckOutOrderRequestAction
  | ICheckOutOrderSuccessAction
  | ICheckOutOrderFailureAction
  | IClearMessageErrorAction;
