import { SET_REFERRAL } from './actionTypes';

export const setReferral = code => ({
  type: SET_REFERRAL,
  payload: code,
});
