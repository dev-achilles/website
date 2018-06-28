/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Tuesday, 29th May 2018 7:07:16 pm
 * Last Modified: Tuesday, 26th June 2018 9:51:58 am
 */
import { eventChannel, END } from 'redux-saga';
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
  FETCH_USER_STATUS,
  FETCH_USER,
  ADD_ADDRESS,
  DELETE_ADDRESS,
  CHANGE_PASSWORD,
} from '../actions/actionTypes';
import {
  submitUserInfoApi,
  submitUserPhotoApi,
  fetchKeypairApi,
  fetchUserStatusApi,
  fetchUserApi,
  deleteAddressApi,
  addAddressApi,
  changePasswordApi,
} from '../services';
import {
  showLoading,
  hideLoading,
  showAlert,
  submitInfo,
  updateUser,
  setKeypair,
  addAddressFailed,
  addAddressSuccess,
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

function* fetchUserStatus(action) {
  try {
    yield put(showLoading());
    const result = yield fetchUserStatusApi();
    yield put(hideLoading());
  } catch (error) {
    yield put(hideLoading());
    if (error.message) {
      yield put(showAlert(error.message, { type: 'error' }));
    }
  }
}

function* watchFetchUserStatus() {
  try {
    yield takeLatest(FETCH_USER_STATUS, fetchUserStatus);
  } catch (error) {
    console.log(error);
  }
}

function* fetchUser(action) {
  try {
    yield put(showLoading());
    const result = yield fetchUserApi();
    yield put(updateUser(result.data.user));
    yield put(hideLoading());
  } catch (error) {
    yield put(hideLoading());
    if (error.message) {
      yield put(showAlert(error.message, { type: 'error' }));
    }
  }
}

function* watchFetchUser() {
  try {
    yield takeLatest(FETCH_USER, fetchUser);
  } catch (error) {
    console.log(error);
  }
}

function* addAddress(action) {
  try {
    yield put(showLoading());
    const result = yield addAddressApi(action.payload);
    yield put(addAddressSuccess());
    yield put(updateUser(result.data.user));
    yield put(hideLoading());
    yield put(showAlert(result.message, { type: 'success' }));
  } catch (error) {
    yield put(addAddressFailed());
    yield put(hideLoading());
    if (error.message) {
      yield put(showAlert(error.message, { type: 'error' }));
    }
  }
}

function* watchAddAddress() {
  try {
    yield takeLatest(ADD_ADDRESS, addAddress);
  } catch (error) {
    console.log(error);
  }
}

function* deleteAddress(action) {
  try {
    yield put(showLoading());
    const result = yield deleteAddressApi(action.payload);
    yield put(updateUser(result.data.user));
    yield put(hideLoading());
    yield put(showAlert(result.message, { type: 'success' }));
  } catch (error) {
    yield put(hideLoading());
    if (error.message) {
      yield put(showAlert(error.message, { type: 'error' }));
    }
  }
}

function* watchDeleteAddress() {
  try {
    yield takeLatest(DELETE_ADDRESS, deleteAddress);
  } catch (error) {
    console.log(error);
  }
}

function* changePassword(action) {
  try {
    yield put(showLoading());
    const result = yield changePasswordApi(action.payload);
    yield put(hideLoading());
    yield put(showAlert(result.message, { type: 'success' }));
  } catch (error) {
    yield put(hideLoading());
    if (error.message) {
      yield put(showAlert(error.message, { type: 'error' }));
    }
  }
}

function* watchChangePassword() {
  try {
    yield takeLatest(CHANGE_PASSWORD, changePassword);
  } catch (error) {
    console.log(error);
  }
}

export default [
  watchSubmitUserInfo,
  watchSubmitUserPhoto,
  watchFetchKeypair,
  watchFetchUserStatus,
  watchFetchUser,
  watchAddAddress,
  watchDeleteAddress,
  watchChangePassword,
];
