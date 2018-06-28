import {
  FETCH_DASHBOARD,
  SET_DASHBOARD,
  TOGGLE_BUY_TOKEN,
  FETCH_RATE,
  SUBMIT_TRANSACTION,
  CONFIRM_TRANSACTION,
  SET_TRANSACTION,
} from './actionTypes';

export const toggleBuyToken = () => ({
  type: TOGGLE_BUY_TOKEN,
});

export const fetchRate = () => ({
  type: FETCH_RATE,
});

export const submitTransaction = params => ({
  type: SUBMIT_TRANSACTION,
  payload: params,
});

export const confirmTransaction = params => ({
  type: CONFIRM_TRANSACTION,
  payload: params,
});

export const setTransaction = params => ({
  type: SET_TRANSACTION,
  payload: params,
});
