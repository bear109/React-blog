import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import loading from './loading';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  auth,
  loading,
});

//루트 사가 생성
export function* rootSaga() {
  yield all([authSaga()]);
}

export default rootReducer;
