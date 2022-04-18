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
