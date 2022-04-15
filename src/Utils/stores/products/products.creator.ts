import {
  IFilterProductsDto,
  IProductDto,
  IResponseProductDto,
  IResponseProductsHomeDto,
} from './products.dto';
import {
  IClearMessageErrorAction,
  IClearProductsAction,
  IGetDetailProductFailureAction,
  IGetDetailProductRequestAction,
  IGetDetailProductSuccessAction,
  IGetProductsFailureAction,
  IGetProductsHomeRequestAction,
  IGetProductsRequestAction,
  IGetProductsSuccessAction,
  ProductsTypes,
} from './products.type';

export function getProducts(
  filterGetProductsDto: IFilterProductsDto,
): IGetProductsRequestAction {
  return {
    type: ProductsTypes.GET_PRODUCTS_REQUEST,
    filterGetProductsDto,
  };
}

export function getProductsHome(): IGetProductsHomeRequestAction {
  return {
    type: ProductsTypes.GET_PRODUCTS_HOME_REQUEST,
  };
}

export function getProductsHomeSuccess(products: IResponseProductsHomeDto) {
  return {
    type: ProductsTypes.GET_PRODUCTS_HOME_SUCCESS,
    products,
  };
}

export function getProductsSuccess(
  products: IResponseProductDto,
): IGetProductsSuccessAction {
  return {
    type: ProductsTypes.GET_PRODUCTS_SUCCESS,
    products,
  };
}

export function getProductsFailure(error: any): IGetProductsFailureAction {
  return {
    type: ProductsTypes.GET_PRODUCTS_FAILURE,
    error,
  };
}

export function getProductDetail(id: string): IGetDetailProductRequestAction {
  return {
    type: ProductsTypes.GET_PRODUCT_DETAIL_REQUEST,
    id,
  };
}

export function getProductDetailSuccess(
  product: IProductDto,
): IGetDetailProductSuccessAction {
  return {
    type: ProductsTypes.GET_PRODUCT_DETAIL_SUCCESS,
    product,
  };
}

export function getProductDetailFailure(
  error: any,
): IGetDetailProductFailureAction {
  return {
    type: ProductsTypes.GET_PRODUCT_DETAIL_FAILURE,
    error,
  };
}

export function clearMessageError(): IClearMessageErrorAction {
  return {
    type: ProductsTypes.CLEAR_MESSAGE_ERROR,
  };
}

export function clearProducts(): IClearProductsAction {
  return {
    type: ProductsTypes.CLEAR_PRODUCTS,
  };
}
