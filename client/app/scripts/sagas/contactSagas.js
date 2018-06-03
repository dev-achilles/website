/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Friday, 20th April 2018 7:54:52 pm
 * Last Modified: Saturday, 21st April 2018 8:33:12 am
 */
import { put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_CONTACT,
  FETCH_CONTACT_INPROCESS,
  FETCH_CONTACT_SUCCESS,
  FETCH_CONTACT_FAILED,
  SHOW_PRELOADER,
  HIDE_PRELOADER,
  SET_TITLE,
  SET_DESC,
  SET_OG,
  SEND_CONTACT,
} from '../actions/actionTypes';

import { getContactFromApi, postContactApi } from '../services';
import { showPreLoader, hidePreLoader, showLoading, hideLoading, showAlert } from '../actions';

function* fetchContact() {
  try {
    // fetch movies from api
    yield put(showPreLoader());
    yield put({ type: FETCH_CONTACT_INPROCESS });
    const data = yield getContactFromApi();
    yield put({ type: FETCH_CONTACT_SUCCESS, payload: data.data });

    if (data.data && data.data.settings) {
      yield put({ type: SET_TITLE, payload: data.data.settings.title });
      yield put({ type: SET_DESC, payload: data.data.settings.description });
      yield put({ type: SET_OG, payload: data.data.settings.og });
    }

    yield put(hidePreLoader());
  } catch (error) {
    console.log(error);
    yield put({ type: FETCH_CONTACT_FAILED });
    yield put(hidePreLoader());
  }
}

function* watchFetchContact() {
  try {
    yield takeLatest(FETCH_CONTACT, fetchContact);
  } catch (error) {
    console.log(error);
  }
}

function* sendContact(actions) {
  console.log('aaaaa');
  try {
    // fetch movies from api
    yield put(showLoading());
    const result = yield postContactApi(actions.payload);
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

function* watchSendContact() {
  try {
    yield takeLatest(SEND_CONTACT, sendContact);
  } catch (error) {
    console.log(error);
  }
}
export default [watchFetchContact, watchSendContact];
