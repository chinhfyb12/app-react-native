import {all, fork} from 'redux-saga/effects';
import {call, put, takeLatest} from '@redux-saga/core/effects';
import {
  clearMessage,
  getProfileFailure,
  getProfileSuccess,
  updatePasswordFailure,
  updatePasswordSuccess,
  updateProfileFailure,
  updateProfileSuccess,
} from './profile.creator';
import {
  getProfileService,
  updatePasswordService,
  updateProfileService,
} from './profile.service';
import {AxiosResponse} from 'axios';
import {IProfileDto, IUpdatePasswordDto} from './profile.dto';
import {
  IUpdatePasswordRequestAction,
  IUpdateProfileRequestAction,
  ProfileTypes,
} from './profile.type';

function* getProfile() {
  try {
    const dataResponse: AxiosResponse<IProfileDto> = yield call(
      getProfileService,
    );
    yield put(getProfileSuccess(dataResponse.data));
  } catch (err: any) {
    yield put(getProfileFailure(err?.message));
    yield put(clearMessage());
  }
}
function* watchGetProfile() {
  yield takeLatest(ProfileTypes.GET_PROFILE_REQUEST, getProfile);
}

function* updateProfile({profile}: IUpdateProfileRequestAction) {
  try {
    yield call(updateProfileService, profile);
    yield put(updateProfileSuccess());
    yield put(clearMessage());
  } catch (err: any) {
    yield put(updateProfileFailure(err?.message));
    yield put(clearMessage());
  }
}
function* watchUpdateProfile() {
  yield takeLatest(ProfileTypes.UPDATE_PROFILE_REQUEST, updateProfile);
}

function* updatePassword({pwd}: IUpdatePasswordRequestAction) {
  try {
    yield call(updatePasswordService, pwd);
    yield put(updatePasswordSuccess('Password updated successfully'));
    yield put(clearMessage());
  } catch (err: any) {
    yield put(updatePasswordFailure(err?.message));
    yield put(clearMessage());
  }
}
function* watchUpdatePassword() {
  yield takeLatest(ProfileTypes.UPDATE_PASSWORD_REQUEST, updatePassword);
}

function* profileSaga() {
  yield all([
    fork(watchGetProfile),
    fork(watchUpdateProfile),
    fork(watchUpdatePassword),
  ]);
}
export default profileSaga;
