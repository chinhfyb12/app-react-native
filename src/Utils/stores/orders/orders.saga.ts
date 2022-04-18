import {all, fork} from 'redux-saga/effects';
import {call, put, takeLatest} from '@redux-saga/core/effects';
import {ICreateOrderRequestAction, OrdersTypes} from './orders.type';
import {
  clearMessageError,
  createOrderFailure,
  createOrderSuccess,
} from './orders.creator';
import {createOrderService} from './orders.service';
import {setProductsId} from 'Utils/helpers/storage';

function* createOrder({order}: ICreateOrderRequestAction) {
  try {
    yield call(createOrderService, order);
    setProductsId();
    yield put(createOrderSuccess('Create order success'));
    yield put(clearMessageError());
  } catch (err: any) {
    yield put(createOrderFailure(err?.message));
    yield put(clearMessageError());
  }
}
function* watchCreateOrder() {
  yield takeLatest(OrdersTypes.CREATE_ORDER_REQUEST, createOrder);
}

function* ordersSaga() {
  yield all([fork(watchCreateOrder)]);
}
export default ordersSaga;
