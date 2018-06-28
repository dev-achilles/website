import { put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_RATE,
  FETCH_RATE_FAILED,
  FETCH_RATE_SUCCESS,
  SUBMIT_TRANSACTION,
  SET_TRANSACTION,
  TOGGLE_BUY_TOKEN,
  CONFIRM_TRANSACTION,
  SET_TRANSACTIONS,
} from '../actions/actionTypes';
import { showLoading, hideLoading, showAlert } from '../actions';
import { fetchRateApi, submitTransactionApi, confirmTransactionApi } from '../services';

function* fetchRate(action) {
  try {
    yield put(showLoading());
    const result = yield fetchRateApi();
    yield put({ type: FETCH_RATE_SUCCESS, payload: result.data.rates });
    yield put(hideLoading());
  } catch (error) {
    yield put(hideLoading());
    yield put({ type: FETCH_RATE_FAILED });
    if (error.message) {
      yield put(showAlert(error.message, { type: 'error' }));
    }
    console.log(error);
  }
}

function* watchFetchRate() {
  try {
    yield takeLatest(FETCH_RATE, fetchRate);
  } catch (error) {
    console.log(error);
  }
}

function* submitTransaction(action) {
  try {
    yield put(showLoading());
    console.log(action.payload);
    const result = yield submitTransactionApi(action.payload);

    console.log(result.data);
    yield put({ type: SET_TRANSACTION, payload: result.data.transaction });
    yield put({ type: SET_TRANSACTIONS, payload: result.data.transactions });
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

function* watchSubmitTransaction() {
  try {
    yield takeLatest(SUBMIT_TRANSACTION, submitTransaction);
  } catch (error) {
    console.log(error);
  }
}

function* confirmTransaction(action) {
  try {
    yield put(showLoading());
    console.log(action.payload);
    const result = yield confirmTransactionApi(action.payload);
    yield put({ type: TOGGLE_BUY_TOKEN });
    yield put({ type: SET_TRANSACTIONS, payload: result.data.transactions });
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

function* watchConfirmTransaction() {
  try {
    yield takeLatest(CONFIRM_TRANSACTION, confirmTransaction);
  } catch (error) {
    console.log(error);
  }
}

export default [watchFetchRate, watchSubmitTransaction, watchConfirmTransaction];
