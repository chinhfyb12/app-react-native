import {all, fork} from 'redux-saga/effects';
import {call, put, takeLatest} from '@redux-saga/core/effects';
import {
  ChatTypes,
  IAddChatRequestAction,
  IGetChatRequestAction,
} from './chat.type';
import {
  addChatFailure,
  addChatSuccess,
  getChatFailure,
  getChatSuccess,
} from './chat.creator';
import {AxiosResponse} from 'axios';
import {addChatService, getChatService} from './chat.service';
import {IChat} from './chat.dto';

function* getChat({userId}: IGetChatRequestAction) {
  try {
    const dataResponse: AxiosResponse<IChat[]> = yield call(
      getChatService,
      userId,
    );
    yield put(getChatSuccess(dataResponse.data));
  } catch (err: any) {
    yield put(getChatFailure(err?.message));
  }
}
function* watchGetChat() {
  yield takeLatest(ChatTypes.GET_CHAT_REQUEST, getChat);
}

function* addChat({data}: IAddChatRequestAction) {
  try {
    yield call(addChatService, data);
    yield put(addChatSuccess('Successfully added'));
  } catch (err: any) {
    yield put(addChatFailure(err?.message));
  }
}
function* watchAddChat() {
  yield takeLatest(ChatTypes.ADD_CHAT_REQUEST, addChat);
}

function* chatSaga() {
  yield all([fork(watchGetChat), fork(watchAddChat)]);
}
export default chatSaga;
