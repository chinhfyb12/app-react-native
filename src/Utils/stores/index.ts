import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const appReducer = (state: any, action: any) => rootReducer(state, action);
const store = createStore(
  appReducer,
  compose(applyMiddleware(sagaMiddleware), composeEnhancers()),
);
sagaMiddleware.run(rootSaga);

export default store;
