import {IProductsState, IResponseProductDto} from './products.dto';
import {ProductsActions, ProductsTypes} from './products.type';

const initialState: IProductsState = {
  products: {} as IResponseProductDto,
  loading: false,
};

export function productReducer(
  state = initialState,
  action: ProductsActions,
): IProductsState {
  switch (action.type) {
    case ProductsTypes.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ProductsTypes.GET_PRODUCTS_HOME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ProductsTypes.GET_PRODUCTS_HOME_SUCCESS:
      return {
        ...state,
        loading: false,
        productsHome: action.products,
      };
    case ProductsTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.products,
      };
    case ProductsTypes.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action?.error,
      };
    case ProductsTypes.GET_PRODUCT_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ProductsTypes.GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        productDetail: action.product,
      };
    case ProductsTypes.GET_PRODUCT_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action?.error,
      };
    case ProductsTypes.CLEAR_MESSAGE_ERROR:
      return {
        ...state,
        message: undefined,
        error: undefined,
      };

    default:
      return state;
  }
}
