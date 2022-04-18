import {all, fork} from 'redux-saga/effects';
import {call, put, takeLatest} from '@redux-saga/core/effects';
import {LoginRequestAction, LoginTypes} from './login.type';
import {clearMessageError, loginFailure, loginSuccess} from './login.creator';
import {AxiosResponse} from 'axios';
import {ILoginDto} from './login.dto';
import {loginService} from './login.service';
import {getProfileSuccess} from '../profile/profile.creator';
import {setStorageToken} from 'Utils/helpers/storage';

function* login({loginDto}: LoginRequestAction) {
  try {
    const data: AxiosResponse<ILoginDto> = yield call(loginService, loginDto);
    yield put(loginSuccess(data.data));
    if (data?.data?.access_token) {
      setStorageToken(data.data.access_token);
    }
    if (data?.data?.profile) {
      yield put(getProfileSuccess(data.data?.profile));
    }
    yield put(clearMessageError());
  } catch (err: any) {
    yield put(loginFailure('Login failed'));
    yield put(clearMessageError());
  }
}
function* watchLogin() {
  yield takeLatest(LoginTypes.LOGIN_REQUEST, login);
}

function* loginSaga() {
  yield all([fork(watchLogin)]);
}
export default loginSaga;
