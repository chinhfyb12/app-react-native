import {all, fork} from 'redux-saga/effects';
import cartSaga from './cart/cart.saga';
import loginSaga from './login/login.saga';
import ordersSaga from './orders/orders.saga';
import productsSaga from './products/products.saga';
import profileSaga from './profile/profile.saga';

export const rootSaga = function* () {
  yield all([
    fork(productsSaga),
    fork(cartSaga),
    fork(ordersSaga),
    fork(profileSaga),
    fork(loginSaga),
  ]);
};
