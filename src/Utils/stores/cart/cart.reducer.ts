import {IOrderDto} from '../orders/orders.dto';
import {ICartState} from './cart.dto';
import {CartActionTypes, CartTypes} from './cart.type';

const initialState: ICartState = {
  loading: false,
  cart: {} as IOrderDto,
};

export function cartReducer(
  state = initialState,
  action: CartActionTypes,
): ICartState {
  switch (action.type) {
    case CartTypes.ADD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CartTypes.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: action.cart,
      };
    case CartTypes.ADD_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action?.error,
      };
    case CartTypes.REMOVE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CartTypes.REMOVE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action?.message,
      };
    case CartTypes.REMOVE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action?.error,
      };
    default:
      return state;
  }
}
