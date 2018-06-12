/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Wednesday, 30th May 2018 6:57:02 am
 * Last Modified: Monday, 11th June 2018 2:51:15 pm
 */
import { put, takeLatest } from 'redux-saga/effects';
import { filterData } from '../helpers';
import { FETCH_SETTINGS } from '../actions/actionTypes';

import { getSettingsApi } from '../services';
import { showLoading, hideLoading, showAlert, setSettings, updateUser } from '../actions';

function* fetchSettings(action) {
  try {
    yield put(showLoading());
    const result = yield getSettingsApi(action.payload);
    const data = filterData(result);
    yield put(setSettings(data));
    if (typeof result.data.user !== 'undefined') yield put(updateUser(result.data.user));
    yield put(hideLoading());
    // yield put(showAlert(result.message, { type: 'success' }));
  } catch (error) {
    yield put(hideLoading());
    if (error.message) {
      yield put(showAlert(error.message, { type: 'error' }));
    }
    console.log(error);
  }
}

function* watchFetchSettings() {
  try {
    yield takeLatest(FETCH_SETTINGS, fetchSettings);
  } catch (error) {
    console.log(error);
  }
}

export default [watchFetchSettings];
