import {all, fork} from 'redux-saga/effects';
import {call, put, takeLatest} from '@redux-saga/core/effects';
import {IRegisterRequestAction, RegisterTypes} from './register.type';
import {
  clearRegister,
  registerFailure,
  registerSuccess,
} from './register.creator';
import {registerService} from './register.service';
import {AxiosResponse} from 'axios';
import {IRegisterDto} from './register.dto';
import {setStorageToken} from 'Utils/helpers/storage';
import {getProfileSuccess} from '../profile/profile.creator';

function* register({user}: IRegisterRequestAction) {
  try {
    const data: AxiosResponse<IRegisterDto> = yield call(registerService, user);
    yield put(registerSuccess('Register success', data.data));
    if (data?.data?.access_token) {
      setStorageToken(data.data.access_token);
    }
    if (data?.data?.profile) {
      yield put(getProfileSuccess(data.data?.profile));
    }
    yield put(clearRegister());
  } catch (err: any) {
    yield put(registerFailure(err?.message));
    yield put(clearRegister());
  }
}
function* watchRegister() {
  yield takeLatest(RegisterTypes.REGISTER_REQUEST, register);
}

function* registerSaga() {
  yield all([fork(watchRegister)]);
}
export default registerSaga;
