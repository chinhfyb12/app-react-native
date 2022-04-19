import {all, fork} from 'redux-saga/effects';
import {call, put, takeLatest} from '@redux-saga/core/effects';
import {
  ICheckOutOrderRequestAction,
  ICreateOrderRequestAction,
  OrdersTypes,
} from './orders.type';
import {
  checkOutOrderFailure,
  checkOutOrderSuccess,
  clearMessageError,
  createOrderFailure,
  createOrderSuccess,
  getOrdersFailure,
  getOrdersSuccess,
} from './orders.creator';
import {
  checkOutOrderService,
  createOrderService,
  getOrdersService,
} from './orders.service';
import {setProductsId} from 'Utils/helpers/storage';
import {AxiosResponse} from 'axios';
import {IOrderDto} from './orders.dto';

function* createOrder({order}: ICreateOrderRequestAction) {
  try {
    yield call(createOrderService, order);
    setProductsId();
    if (order?.user_id) {
      yield put(createOrderSuccess('Own order created successfully'));
    } else {
      yield put(createOrderSuccess('Create order success'));
    }
    yield put(clearMessageError());
  } catch (err: any) {
    yield put(createOrderFailure(err?.message));
    yield put(clearMessageError());
  }
}
function* watchCreateOrder() {
  yield takeLatest(OrdersTypes.CREATE_ORDER_REQUEST, createOrder);
}

function* getOrder() {
  try {
    const dataResponse: AxiosResponse<IOrderDto> = yield call(getOrdersService);
    yield put(getOrdersSuccess(dataResponse.data));
  } catch (err: any) {
    yield put(getOrdersFailure(err?.message));
    yield put(clearMessageError());
  }
}
function* watchGetOrder() {
  yield takeLatest(OrdersTypes.GET_ORDERS_REQUEST, getOrder);
}

function* checkOutOrder({orderId, order}: ICheckOutOrderRequestAction) {
  try {
    yield call(checkOutOrderService, orderId, order);
    yield put(checkOutOrderSuccess('Check out order success'));
    yield put(clearMessageError());
  } catch (err: any) {
    yield put(checkOutOrderFailure(err?.message));
    yield put(clearMessageError());
  }
}
function* watchCheckOutOrder() {
  yield takeLatest(OrdersTypes.CHECK_OUT_ORDER_REQUEST, checkOutOrder);
}

function* ordersSaga() {
  yield all([
    fork(watchCreateOrder),
    fork(watchGetOrder),
    fork(watchCheckOutOrder),
  ]);
}
export default ordersSaga;
