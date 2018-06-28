/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Wednesday, 20th June 2018 12:43:14 am
 * Last Modified: Wednesday, 20th June 2018 6:18:41 am
 */
import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_PAGE, FETCH_PAGE_SUCCESS, FETCH_PAGE_FAILED } from '../actions/actionTypes';
import { showAlert, hideAlert, showPreLoader, hidePreLoader } from '../actions';
import { fetchPageApi } from '../services';

function* fetchPage(actions, dispatch) {
  try {
    // fetch movies from api
    yield put(showPreLoader());
    const result = yield fetchPageApi(actions.payload);
    yield put({ type: FETCH_PAGE_SUCCESS, payload: result.data.page });
    yield put(hidePreLoader());
  } catch (error) {
    console.log(error);
    yield put({ type: FETCH_PAGE_FAILED });
    yield put(hidePreLoader());
  }
}

function* watchFetchPage() {
  try {
    yield takeLatest(FETCH_PAGE, fetchPage);
  } catch (error) {
    console.log(error);
  }
}
export default [watchFetchPage];
