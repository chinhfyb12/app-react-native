import {IOrderDto} from './orders.dto';
import {
  IClearMessageErrorAction,
  ICreateOrderFailureAction,
  ICreateOrderRequestAction,
  ICreateOrderSuccessAction,
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
export function clearMessageError(): IClearMessageErrorAction {
  return {
    type: OrdersTypes.CLEAR_MESSAGE_ERROR,
  };
}
