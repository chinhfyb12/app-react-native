import {all, fork} from 'redux-saga/effects';

let temp: any;

function* rootSaga(): any {
  yield all([fork(temp)]);
}

export default rootSaga;
