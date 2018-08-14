import { put, takeLatest } from 'redux-saga/effects';
import { SET_REFERRAL } from '../actions/actionTypes';
import { clickReferralApi } from '../services';

function* clickReferral(actions, dispatch) {
  try {
    // fetch movies from api
    console.log('click referall api');
    const result = yield clickReferralApi(actions.payload);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

function* watchClickReferral() {
  try {
    yield takeLatest(SET_REFERRAL, clickReferral);
  } catch (error) {
    console.log(error);
  }
}
export default [watchClickReferral];
