import {all, fork} from 'redux-saga/effects';
import productsSaga from './products/products.saga';

export const rootSaga = function* () {
  yield all([fork(productsSaga)]);
};
