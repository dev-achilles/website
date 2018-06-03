/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 1st April 2018 8:26:06 pm
 * Last Modified: Wednesday, 30th May 2018 7:03:30 am
 */
import { put, takeLatest } from 'redux-saga/effects';
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
import { showPreLoader, hidePreLoader } from '../actions';

function* fetchHome() {
  try {
    // fetch movies from api
    yield put(showPreLoader());
    yield put({ type: FETCH_HOME_INPROCESS });
    const data = yield getHomeFromApi();
    yield put({ type: FETCH_HOME_SUCCESS, payload: data.data });

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
