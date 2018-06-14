/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 1st April 2018 8:26:06 pm
 * Last Modified: Thursday, 14th June 2018 12:05:01 pm
 */
import { put, takeLatest } from 'redux-saga/effects';
import { filterData } from '../helpers';
import {
  FETCH_HOME,
  FETCH_HOME_INPROCESS,
  FETCH_HOME_SUCCESS,
  FETCH_HOME_FAILED,
  SHOW_PRELOADER,
  HIDE_PRELOADER,
  SET_TITLE,
  SET_DESC,
  SET_OG,
} from '../actions/actionTypes';

import { getHomeFromApi } from '../services';
import { showPreLoader, hidePreLoader, updateUser } from '../actions';

function* fetchHome() {
  try {
    // fetch movies from api
    yield put(showPreLoader());
    yield put({ type: FETCH_HOME_INPROCESS });
    const result = yield getHomeFromApi();
    yield put({ type: FETCH_HOME_SUCCESS, payload: result.data });
    if (result.data.data && result.data.data.settings) {
      yield put({ type: SET_TITLE, payload: result.data.data.settings.title });
      yield put({ type: SET_DESC, payload: result.data.data.settings.description });
      yield put({ type: SET_OG, payload: result.data.data.settings.og });
    }

    yield put(hidePreLoader());
  } catch (error) {
    console.log(error);
    yield put({ type: FETCH_HOME_FAILED });
    yield put(hidePreLoader());
  }
}

function* watchFetchHome() {
  try {
    yield takeLatest(FETCH_HOME, fetchHome);
  } catch (error) {
    console.log(error);
  }
}
export default [watchFetchHome];
