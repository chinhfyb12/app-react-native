import {all, fork} from 'redux-saga/effects';
import {call, put, takeLatest} from '@redux-saga/core/effects';
import {
  IGetDetailProductRequestAction,
  IGetProductsRequestAction,
  ProductsTypes,
} from './products.type';
import {
  clearMessageError,
  getProductDetailFailure,
  getProductDetailSuccess,
  getProductsFailure,
  getProductsHomeSuccess,
  getProductsSuccess,
} from './products.creator';
import {AxiosResponse} from 'axios';
import {
  IProductDto,
  IResponseProductDto,
  IResponseProductsHomeDto,
} from './products.dto';
import {
  getProductDetailService,
  getProductsHomeService,
  getProductsService,
} from './products.service';

function* getProducts({filterGetProductsDto}: IGetProductsRequestAction) {
  try {
    const dataResponse: AxiosResponse<IResponseProductDto> = yield call(
      getProductsService,
      filterGetProductsDto,
    );
    yield put(getProductsSuccess(dataResponse.data));
  } catch (error: any) {
    yield put(getProductsFailure(error?.message));
    yield put(clearMessageError());
  }
}

function* watchGetProducts() {
  yield takeLatest(ProductsTypes.GET_PRODUCTS_REQUEST, getProducts);
}

function* getProductsHome() {
  try {
    const dataResponse: AxiosResponse<IResponseProductsHomeDto> = yield call(
      getProductsHomeService,
    );
    yield put(getProductsHomeSuccess(dataResponse.data));
  } catch (error: any) {
    yield put(getProductsFailure(error?.message));
    yield put(clearMessageError());
  }
}

function* watchGetProductsHome() {
  yield takeLatest(ProductsTypes.GET_PRODUCTS_HOME_REQUEST, getProductsHome);
}

function* getProductDetail({id}: IGetDetailProductRequestAction) {
  try {
    const dataResponse: AxiosResponse<IProductDto> = yield call(
      getProductDetailService,
      id,
    );
    yield put(getProductDetailSuccess(dataResponse.data));
  } catch (error: any) {
    yield put(getProductDetailFailure(error?.message));
    yield put(clearMessageError());
  }
}

function* watchGetProductDetail() {
  yield takeLatest(ProductsTypes.GET_PRODUCT_DETAIL_REQUEST, getProductDetail);
}

function* productsSaga() {
  yield all([
    fork(watchGetProducts),
    fork(watchGetProductDetail),
    fork(watchGetProductsHome),
  ]);
}

export default productsSaga;
