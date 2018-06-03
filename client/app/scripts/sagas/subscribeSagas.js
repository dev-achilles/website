/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Thursday, 19th April 2018 11:47:13 pm
 * Last Modified: Friday, 20th April 2018 8:06:46 pm
 */
import { put, takeLatest } from 'redux-saga/effects';
import { SEND_SUBSCRIBE } from '../actions/actionTypes';
import { showAlert, hideAlert, showLoading, hideLoading } from '../actions';
import { postSubscribeApi } from '../services/homeServices';

function* sendSubscribe(actions, dispatch) {
  try {
    // fetch movies from api
    yield put(showLoading());
    const result = yield postSubscribeApi(actions.payload);
    yield put(hideLoading());
    yield put(showAlert(result.message, { type: 'success' }));
  } catch (error) {
    yield put(hideLoading());
    if (error.message) {
      yield put(showAlert(error.message, { type: 'error' }));
    }
    console.log(error);
  }
}

function* watchSendSubscribe() {
  try {
    yield takeLatest(SEND_SUBSCRIBE, sendSubscribe);
  } catch (error) {
    console.log(error);
  }
}
export default [watchSendSubscribe];
