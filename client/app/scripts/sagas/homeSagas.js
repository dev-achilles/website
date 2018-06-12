/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 1st April 2018 8:26:06 pm
 * Last Modified: Monday, 11th June 2018 2:57:15 pm
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
    const data = filterData(result);
    yield put({ type: FETCH_HOME_SUCCESS, payload: data });
    if (typeof result.data.user !== 'undefined') yield put(updateUser(result.data.user));

    if (data.data && data.data.settings) {
      yield put({ type: SET_TITLE, payload: data.data.settings.title });
      yield put({ type: SET_DESC, payload: data.data.settings.description });
      yield put({ type: SET_OG, payload: data.data.settings.og });
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
