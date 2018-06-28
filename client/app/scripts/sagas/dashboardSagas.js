/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Friday, 22nd June 2018 6:52:45 am
 * Last Modified: Friday, 22nd June 2018 6:57:22 am
 */

import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_DASHBOARD } from '../actions/actionTypes';
import { showLoading, hideLoading, showAlert, setDashboard } from '../actions';
import { fetchDashboardApi } from '../services';

function* fetchDashboard(action) {
  try {
    yield put(showLoading());
    const result = yield fetchDashboardApi();
    yield put(setDashboard(result.data));
    yield put(hideLoading());
  } catch (error) {
    yield put(hideLoading());
    if (error.message) {
      yield put(showAlert(error.message, { type: 'error' }));
    }
    console.log(error);
  }
}

function* watchFetchDashboard() {
  try {
    yield takeLatest(FETCH_DASHBOARD, fetchDashboard);
  } catch (error) {
    console.log(error);
  }
}

export default [watchFetchDashboard];
