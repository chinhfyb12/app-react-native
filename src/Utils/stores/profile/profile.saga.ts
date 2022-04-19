import {all, fork} from 'redux-saga/effects';
import {call, put, takeLatest} from '@redux-saga/core/effects';
import {
  getProfileFailure,
  getProfileSuccess,
  updateProfileFailure,
  updateProfileSuccess,
} from './profile.creator';
import {getProfileService, updateProfileService} from './profile.service';
import {AxiosResponse} from 'axios';
import {IProfileDto} from './profile.dto';
import {IUpdateProfileRequestAction, ProfileTypes} from './profile.type';

function* getProfile() {
  try {
    const dataResponse: AxiosResponse<IProfileDto> = yield call(
      getProfileService,
    );
    yield put(getProfileSuccess(dataResponse.data));
  } catch (err: any) {
    yield put(getProfileFailure(err?.message));
  }
}
function* watchGetProfile() {
  yield takeLatest(ProfileTypes.GET_PROFILE_REQUEST, getProfile);
}

function* updateProfile({profile}: IUpdateProfileRequestAction) {
  try {
    yield call(updateProfileService, profile);
    yield put(updateProfileSuccess());
  } catch (err: any) {
    yield put(updateProfileFailure(err?.message));
  }
}
function* watchUpdateProfile() {
  yield takeLatest(ProfileTypes.UPDATE_PROFILE_REQUEST, updateProfile);
}

function* profileSaga() {
  yield all([fork(watchGetProfile), fork(watchUpdateProfile)]);
}
export default profileSaga;
