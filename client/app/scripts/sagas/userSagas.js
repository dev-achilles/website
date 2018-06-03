/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Tuesday, 29th May 2018 7:07:16 pm
 * Last Modified: Sunday, 3rd June 2018 3:14:23 pm
 */
import { put, takeLatest } from 'redux-saga/effects';
import {
  SUBMIT_LOGIN,
  SUBMIT_FORGOT,
  SUBMIT_VERIFY,
  RESEND_CODE,
  SUBMIT_VERIFICATION_CODE,
  SUBMIT_USER_INFO,
  SUBMIT_USER_PHOTO,
  FETCH_KEYPAIR,
} from '../actions/actionTypes';
import { submitUserInfoApi, submitUserPhotoApi, fetchKeypairApi } from '../services';
import {
  showLoading,
  hideLoading,
  showAlert,
  submitInfo,
  updateUser,
  setKeypair,
} from '../actions';

function* submitUserPhoto(action) {
  try {
    yield put(showLoading());
    const result = yield submitUserPhotoApi(action.payload);
    yield put(updateUser(result.data.user));
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

function* watchSubmitUserPhoto() {
  try {
    yield takeLatest(SUBMIT_USER_PHOTO, submitUserPhoto);
  } catch (error) {
    console.log(error);
  }
}

function* submitUserInfo(action) {
  try {
    yield put(showLoading());
    const result = yield submitUserInfoApi(action.payload);
    yield put(updateUser(result.data.user));
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

function* watchSubmitUserInfo() {
  try {
    yield takeLatest(SUBMIT_USER_INFO, submitUserInfo);
  } catch (error) {
    console.log(error);
  }
}

function* fetchKeypair(action) {
  try {
    yield put(showLoading());
    const result = yield fetchKeypairApi();
    yield put(updateUser(result.data.user));
    yield put(setKeypair(result.data.keypair));
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

function* watchFetchKeypair() {
  try {
    yield takeLatest(FETCH_KEYPAIR, fetchKeypair);
  } catch (error) {
    console.log(error);
  }
}

export default [watchSubmitUserInfo, watchSubmitUserPhoto, watchFetchKeypair];
