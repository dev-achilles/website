/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Monday, 28th May 2018 5:17:52 pm
 * Last Modified: Saturday, 2nd June 2018 9:20:21 am
 */
import { put, takeLatest } from 'redux-saga/effects';
import {
  SUBMIT_LOGIN,
  SUBMIT_FORGOT,
  SUBMIT_VERIFY,
  RESEND_CODE,
  SUBMIT_VERIFICATION_CODE,
  SUBMIT_SIGNUP,
  SIGNUP_SUCCESS,
  FORGOT_SUCCESS,
  SUBMIT_RESET,
  RESET_SUCCESS,
} from '../actions/actionTypes';

import {
  submitLoginApi,
  resendCodeApi,
  submitVerificationApi,
  submitSignUpApi,
  submitForgotApi,
  submitResetApi,
} from '../services';
import {
  showLoading,
  hideLoading,
  showAlert,
  loginSucess,
  loginFailed,
  updateUser,
} from '../actions';

// submit login user
function* submitLogin(action) {
  try {
    yield put(showLoading());
    const result = yield submitLoginApi(action.payload);
    console.log(result);
    yield put(loginSucess(result.data));
    yield put(hideLoading());
    yield put(showAlert(result.message, { type: 'success' }));
  } catch (error) {
    yield put(loginFailed());
    yield put(hideLoading());
    if (error.message) {
      yield put(showAlert(error.message, { type: 'error' }));
    }
    console.log(error);
  }
}

function* watchSubmitLogin() {
  try {
    yield takeLatest(SUBMIT_LOGIN, submitLogin);
  } catch (error) {
    console.log(error);
  }
}

// submit signup new user
function* submitSignUp(action) {
  try {
    yield put(showLoading());
    const result = yield submitSignUpApi(action.payload);
    yield put({ type: SIGNUP_SUCCESS });
    yield put(hideLoading());
    yield put(showAlert(result.message, { type: 'success' }));
  } catch (error) {
    yield put(loginFailed());
    yield put(hideLoading());
    if (error.message) {
      yield put(showAlert(error.message, { type: 'error' }));
    }
    console.log(error);
  }
}

function* watchSubmitSignUp() {
  try {
    yield takeLatest(SUBMIT_SIGNUP, submitSignUp);
  } catch (error) {
    console.log(error);
  }
}

// submit forgot password
function* submitForgot(action) {
  try {
    yield put(showLoading());
    const result = yield submitForgotApi(action.payload);
    yield put({ type: FORGOT_SUCCESS });
    yield put(hideLoading());
    yield put(showAlert(result.message, { type: 'success' }));
  } catch (error) {
    yield put(loginFailed());
    yield put(hideLoading());
    if (error.message) {
      yield put(showAlert(error.message, { type: 'error' }));
    }
    console.log(error);
  }
}

function* watchSubmitForgot() {
  try {
    yield takeLatest(SUBMIT_FORGOT, submitForgot);
  } catch (error) {
    console.log(error);
  }
}

// submit reset password
function* submitReset(action) {
  try {
    yield put(showLoading());
    const result = yield submitResetApi(action.payload);
    yield put({ type: RESET_SUCCESS });
    yield put(hideLoading());
    yield put(showAlert(result.message, { type: 'success' }));
  } catch (error) {
    yield put(loginFailed());
    yield put(hideLoading());
    if (error.message) {
      yield put(showAlert(error.message, { type: 'error' }));
    }
    console.log(error);
  }
}

function* watchSubmitReset() {
  try {
    yield takeLatest(SUBMIT_RESET, submitReset);
  } catch (error) {
    console.log(error);
  }
}

// Resend code to verify email
function* resendCode() {
  try {
    yield put(showLoading());
    const result = yield resendCodeApi();
    console.log(result);
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

function* watchResendCode() {
  try {
    yield takeLatest(RESEND_CODE, resendCode);
  } catch (error) {
    console.log(error);
  }
}

// submit email verification
function* submitVerificationEmail(action) {
  try {
    yield put(showLoading());
    const result = yield submitVerificationApi(action.payload);
    console.log(result.data.user);
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

function* watchVerificationEmail() {
  try {
    yield takeLatest(SUBMIT_VERIFICATION_CODE, submitVerificationEmail);
  } catch (error) {
    console.log(error);
  }
}

export default [
  watchSubmitLogin,
  watchResendCode,
  watchVerificationEmail,
  watchSubmitSignUp,
  watchSubmitForgot,
  watchSubmitReset,
];
