/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 3rd June 2018 4:39:22 pm
 * Last Modified: Sunday, 3rd June 2018 5:12:31 pm
 */

import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_WALLET } from '../actions/actionTypes';
import { showLoading, hideLoading, showAlert, setWallet } from '../actions';
import { fetchWalletApi } from '../services';

function* fetchKeypair(action) {
  try {
    yield put(showLoading());
    const result = yield fetchWalletApi();
    yield put(setWallet(result.data));
    yield put(hideLoading());
  } catch (error) {
    yield put(hideLoading());
    if (error.message) {
      yield put(showAlert(error.message, { type: 'error' }));
    }
    console.log(error);
  }
}

function* watchFetchWallet() {
  try {
    yield takeLatest(FETCH_WALLET, fetchKeypair);
  } catch (error) {
    console.log(error);
  }
}

export default [watchFetchWallet];
