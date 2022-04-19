import {IOrderDto} from './orders.dto';
import {
  ICheckOutOrderFailureAction,
  ICheckOutOrderRequestAction,
  ICheckOutOrderSuccessAction,
  IClearMessageErrorAction,
  ICreateOrderFailureAction,
  ICreateOrderRequestAction,
  ICreateOrderSuccessAction,
  IGetOrderFailureAction,
  IGetOrderRequestAction,
  IGetOrderSuccessAction,
  OrdersTypes,
} from './orders.type';

export function createOrder(order: IOrderDto): ICreateOrderRequestAction {
  return {
    type: OrdersTypes.CREATE_ORDER_REQUEST,
    order,
  };
}
export function createOrderSuccess(
  message?: string,
): ICreateOrderSuccessAction {
  return {
    type: OrdersTypes.CREATE_ORDER_SUCCESS,
    message,
  };
}
export function createOrderFailure(error?: any): ICreateOrderFailureAction {
  return {
    type: OrdersTypes.CREATE_ORDER_FAILURE,
    error,
  };
}
export function getOrders(): IGetOrderRequestAction {
  return {
    type: OrdersTypes.GET_ORDERS_REQUEST,
  };
}
export function getOrdersSuccess(orders: IOrderDto): IGetOrderSuccessAction {
  return {
    type: OrdersTypes.GET_ORDERS_SUCCESS,
    orders,
  };
}
export function getOrdersFailure(error?: any): IGetOrderFailureAction {
  return {
    type: OrdersTypes.GET_ORDERS_FAILURE,
    error,
  };
}
export function checkOutOrder(
  orderId: string,
  order: IOrderDto,
): ICheckOutOrderRequestAction {
  return {
    type: OrdersTypes.CHECK_OUT_ORDER_REQUEST,
    orderId,
    order,
  };
}
export function checkOutOrderSuccess(
  message?: string,
): ICheckOutOrderSuccessAction {
  return {
    type: OrdersTypes.CHECK_OUT_ORDER_SUCCESS,
    message,
  };
}
export function checkOutOrderFailure(error?: any): ICheckOutOrderFailureAction {
  return {
    type: OrdersTypes.CHECK_OUT_ORDER_FAILURE,
    error,
  };
}
export function clearMessageError(): IClearMessageErrorAction {
  return {
    type: OrdersTypes.CLEAR_MESSAGE_ERROR,
  };
}
