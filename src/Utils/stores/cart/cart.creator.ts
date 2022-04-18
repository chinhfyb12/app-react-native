import {IOrderDto} from '../orders/orders.dto';
import {
  CartTypes,
  IAddProductFailureAction,
  IAddProductRequestAction,
  IAddProductSuccessAction,
  IClearMessageErrorAction,
  IRemoveProductFailureAction,
  IRemoveProductRequestAction,
  IRemoveProductSuccessAction,
} from './cart.type';

export function addProductCart(cart: IOrderDto): IAddProductRequestAction {
  return {
    type: CartTypes.ADD_PRODUCT_REQUEST,
    cart,
  };
}
export function addProductCartSuccess(
  cart?: IOrderDto,
): IAddProductSuccessAction {
  return {
    type: CartTypes.ADD_PRODUCT_SUCCESS,
    cart,
  };
}
export function addProductCartFailure(
  error?: string,
): IAddProductFailureAction {
  return {
    type: CartTypes.ADD_PRODUCT_FAILURE,
    error,
  };
}
export function removeProductCart(
  productId: string,
  quantity: number,
): IRemoveProductRequestAction {
  return {
    type: CartTypes.REMOVE_PRODUCT_REQUEST,
    productId,
    quantity,
  };
}
export function removeProductCartSuccess(
  message?: string,
): IRemoveProductSuccessAction {
  return {
    type: CartTypes.REMOVE_PRODUCT_SUCCESS,
    message,
  };
}
export function removeProductCartFailure(
  error?: string,
): IRemoveProductFailureAction {
  return {
    type: CartTypes.REMOVE_PRODUCT_FAILURE,
    error,
  };
}
export function clearMessageError(): IClearMessageErrorAction {
  return {
    type: CartTypes.CLEAR_MESSAGE_ERROR,
  };
}
