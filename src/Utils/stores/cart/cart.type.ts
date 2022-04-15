import {IOrderDto} from '../orders/orders.dto';

export enum CartTypes {
  ADD_PRODUCT_REQUEST = 'cart/ADD_PRODUCT_REQUEST',
  ADD_PRODUCT_SUCCESS = 'cart/ADD_PRODUCT_SUCCESS',
  ADD_PRODUCT_FAILURE = 'cart/ADD_PRODUCT_FAILURE',

  REMOVE_PRODUCT_REQUEST = 'cart/REMOVE_PRODUCT_REQUEST',
  REMOVE_PRODUCT_SUCCESS = 'cart/REMOVE_PRODUCT_SUCCESS',
  REMOVE_PRODUCT_FAILURE = 'cart/REMOVE_PRODUCT_FAILURE',
}

export interface IAddProductRequestAction {
  type: CartTypes.ADD_PRODUCT_REQUEST;
  cart: IOrderDto;
}
export interface IAddProductSuccessAction {
  type: CartTypes.ADD_PRODUCT_SUCCESS;
  cart: IOrderDto;
}
export interface IAddProductFailureAction {
  type: CartTypes.ADD_PRODUCT_FAILURE;
  error?: string;
}

export interface IRemoveProductRequestAction {
  type: CartTypes.REMOVE_PRODUCT_REQUEST;
  productId: string;
}
export interface IRemoveProductSuccessAction {
  type: CartTypes.REMOVE_PRODUCT_SUCCESS;
  message?: string;
}
export interface IRemoveProductFailureAction {
  type: CartTypes.REMOVE_PRODUCT_FAILURE;
  error?: string;
}

export type CartActionTypes =
  | IAddProductRequestAction
  | IAddProductSuccessAction
  | IAddProductFailureAction
  | IRemoveProductRequestAction
  | IRemoveProductSuccessAction
  | IRemoveProductFailureAction;
