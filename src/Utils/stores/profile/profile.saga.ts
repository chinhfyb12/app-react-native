import {all, fork} from 'redux-saga/effects';
import {call, put, takeLatest} from '@redux-saga/core/effects';
import {getProfileFailure, getProfileSuccess} from './profile.creator';
import {getProfileService} from './profile.service';
import {AxiosResponse} from 'axios';
import {IProfileDto} from './profile.dto';
import {ProfileTypes} from './profile.type';

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

function* profileSaga() {
  yield all([fork(watchGetProfile)]);
}
export default profileSaga;
