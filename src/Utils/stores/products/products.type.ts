import {
  IFilterProductsDto,
  IProductDto,
  IResponseProductDto,
  IResponseProductsHomeDto,
} from './products.dto';

export enum ProductsTypes {
  GET_PRODUCTS_REQUEST = 'products/GET_PRODUCTS_REQUEST',
  GET_PRODUCTS_SUCCESS = 'products/GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAILURE = 'products/GET_PRODUCTS_FAILURE',

  GET_PRODUCTS_HOME_REQUEST = 'products/GET_PRODUCTS_HOME_REQUEST',
  GET_PRODUCTS_HOME_SUCCESS = 'products/GET_PRODUCTS_HOME_SUCCESS',

  GET_PRODUCT_DETAIL_REQUEST = 'products/GET_PRODUCT_DETAIL_REQUEST',
  GET_PRODUCT_DETAIL_SUCCESS = 'products/GET_PRODUCT_DETAIL_SUCCESS',
  GET_PRODUCT_DETAIL_FAILURE = 'products/GET_PRODUCT_DETAIL_FAILURE',

  CLEAR_MESSAGE_ERROR = 'products/CLEAR_MESSAGE_ERROR',
  CLEAR_PRODUCTS = 'products/CLEAR_PRODUCTS',
}

export interface IGetProductsRequestAction {
  type: typeof ProductsTypes.GET_PRODUCTS_REQUEST;
  filterGetProductsDto: IFilterProductsDto;
}

export interface IGetProductsHomeRequestAction {
  type: typeof ProductsTypes.GET_PRODUCTS_HOME_REQUEST;
}

export interface IGetProductsHomeSuccessAction {
  type: typeof ProductsTypes.GET_PRODUCTS_HOME_SUCCESS;
  products: IResponseProductsHomeDto;
}

export interface IGetProductsSuccessAction {
  type: typeof ProductsTypes.GET_PRODUCTS_SUCCESS;
  products: IResponseProductDto;
}

export interface IGetProductsFailureAction {
  type: typeof ProductsTypes.GET_PRODUCTS_FAILURE;
  error: any;
}

export interface IGetDetailProductRequestAction {
  type: typeof ProductsTypes.GET_PRODUCT_DETAIL_REQUEST;
  id: string;
}

export interface IGetDetailProductSuccessAction {
  type: typeof ProductsTypes.GET_PRODUCT_DETAIL_SUCCESS;
  product: IProductDto;
}

export interface IGetDetailProductFailureAction {
  type: typeof ProductsTypes.GET_PRODUCT_DETAIL_FAILURE;
  error: any;
}

export interface IClearMessageErrorAction {
  type: typeof ProductsTypes.CLEAR_MESSAGE_ERROR;
}

export interface IClearProductsAction {
  type: typeof ProductsTypes.CLEAR_PRODUCTS;
}

export type ProductsActions =
  | IGetProductsRequestAction
  | IGetProductsHomeRequestAction
  | IGetProductsHomeSuccessAction
  | IGetProductsSuccessAction
  | IGetProductsFailureAction
  | IClearMessageErrorAction
  | IGetDetailProductRequestAction
  | IGetDetailProductSuccessAction
  | IGetDetailProductFailureAction
  | IClearProductsAction;
