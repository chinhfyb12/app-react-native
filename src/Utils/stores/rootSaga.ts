import {all, fork} from 'redux-saga/effects';
import cartSaga from './cart/cart.saga';
import productsSaga from './products/products.saga';

export const rootSaga = function* () {
  yield all([fork(productsSaga), fork(cartSaga)]);
};
