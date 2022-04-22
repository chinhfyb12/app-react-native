import {IOrderState} from './orders.dto';
import {OrdersActions, OrdersTypes} from './orders.type';

const initialState: IOrderState = {
  loading: false,
};

export function orderReducer(
  state = initialState,
  action: OrdersActions,
): IOrderState {
  switch (action.type) {
    case OrdersTypes.CREATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case OrdersTypes.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.message,
      };
    case OrdersTypes.CREATE_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case OrdersTypes.GET_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case OrdersTypes.GET_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.orders,
      };
    case OrdersTypes.GET_ORDERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        order: {
          products: [],
        },
      };
    case OrdersTypes.CHECK_OUT_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case OrdersTypes.CHECK_OUT_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.message,
      };
    case OrdersTypes.CHECK_OUT_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case OrdersTypes.CLEAR_MESSAGE_ERROR:
      return {
        ...state,
        message: undefined,
        error: undefined,
      };
    default:
      return state;
  }
}
