/*
 * File: airdropSagas.js
 * Project: react-boilerplate
 * File Created: Friday, 10th August 2018 3:55:06 pm
 * Author: Navi Ocean (navi.ocean@outlook.com)
 * -----
 * Last Modified: Tuesday, 14th August 2018 4:26:52 pm
 * Modified By: Navi Ocean (navi.ocean@outlook.com>)
 * -----
 * Copyright <<projectCreationYear>> - 2018 Hawking LLC, Hawking LLC
 */
import { put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_AIRDROP,
  SUBMIT_INVITE_EMAIL,
  SUBMIT_FOLLOW_TELEGRAM,
  SUBMIT_FOLLOW_TWITTER,
  JOIN_PROMOTE_TWITTER,
  JOIN_PROMOTE_BITCOINTALK,
  ADD_LINK_PROMOTE_BITCOINTALK,
  ADD_LINK_PROMOTE_TWITTER,
} from '../actions/actionTypes';
import {
  showLoading,
  hideLoading,
  showAlert,
  setAirdrop,
  updateFollowAidrop,
  updatePromoteAirdrop,
} from '../actions';
import {
  fetchAirdropApi,
  submitInviteEmailApi,
  followTelegramApi,
  followTwitterApi,
  promoteTwitterApi,
  promoteBitcointalkApi,
  addLinkPromoteBitcointalkApi,
  addLinkPromoteTwitterApi,
} from '../services';

function* fetchAirdrop(action) {
  try {
    yield put(showLoading());
    const result = yield fetchAirdropApi();
    yield put(setAirdrop(result.data));
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
    yield takeLatest(FETCH_AIRDROP, fetchAirdrop);
  } catch (error) {
    console.log(error);
  }
}

function* submitInviteEmail(action) {
  try {
    yield put(showLoading());
    const result = yield submitInviteEmailApi(action.payload);
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

function* watchSubmitInviteEmail() {
  try {
    yield takeLatest(SUBMIT_INVITE_EMAIL, submitInviteEmail);
  } catch (error) {
    console.log(error);
  }
}

function* submitFollowTelegram(action) {
  try {
    yield put(showLoading());
    const result = yield followTelegramApi(action.payload);
    yield put(updateFollowAidrop(result.data));
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

function* watchSubmitFollowTelegram() {
  try {
    yield takeLatest(SUBMIT_FOLLOW_TELEGRAM, submitFollowTelegram);
  } catch (error) {
    console.log(error);
  }
}

function* submitFollowTwitter(action) {
  try {
    yield put(showLoading());
    const result = yield followTwitterApi(action.payload);
    yield put(updateFollowAidrop(result.data));
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

function* watchSubmitFollowTwitter() {
  try {
    yield takeLatest(SUBMIT_FOLLOW_TWITTER, submitFollowTwitter);
  } catch (error) {
    console.log(error);
  }
}

function* joinPromoteTwitter(action) {
  try {
    yield put(showLoading());
    const result = yield promoteTwitterApi(action.payload);
    yield put(updatePromoteAirdrop(result.data));
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

function* watchJoinPromoteTwitter() {
  try {
    yield takeLatest(JOIN_PROMOTE_TWITTER, joinPromoteTwitter);
  } catch (error) {
    console.log(error);
  }
}

function* joinPromoteBitcointalk(action) {
  try {
    yield put(showLoading());
    const result = yield promoteBitcointalkApi(action.payload);
    yield put(updatePromoteAirdrop(result.data));
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

function* watchJoinPromoteBitcointalk() {
  try {
    yield takeLatest(JOIN_PROMOTE_BITCOINTALK, joinPromoteBitcointalk);
  } catch (error) {
    console.log(error);
  }
}

function* addLinkPromoteBitcointalk(action) {
  try {
    yield put(showLoading());
    const result = yield addLinkPromoteBitcointalkApi(action.payload);
    console.log(result.data);
    yield put(updatePromoteAirdrop(result.data));
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

function* watchAddLinkPromoteBitcointalk() {
  try {
    yield takeLatest(ADD_LINK_PROMOTE_BITCOINTALK, addLinkPromoteBitcointalk);
  } catch (error) {
    console.log(error);
  }
}

function* addLinkPromoteTwitter(action) {
  try {
    yield put(showLoading());
    const result = yield addLinkPromoteTwitterApi(action.payload);
    yield put(updatePromoteAirdrop(result.data));
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

function* watchAddLinkPromoteTwitter() {
  try {
    yield takeLatest(ADD_LINK_PROMOTE_TWITTER, addLinkPromoteTwitter);
  } catch (error) {
    console.log(error);
  }
}

export default [
  watchFetchWallet,
  watchSubmitInviteEmail,
  watchSubmitFollowTelegram,
  watchSubmitFollowTwitter,
  watchJoinPromoteTwitter,
  watchJoinPromoteBitcointalk,
  watchAddLinkPromoteBitcointalk,
  watchAddLinkPromoteTwitter,
];
