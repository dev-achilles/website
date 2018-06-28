/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Friday, 22nd June 2018 9:19:40 am
 * Last Modified: Thursday, 28th June 2018 7:03:55 am
 */
import {
  TOGGLE_BUY_TOKEN,
  FETCH_RATE,
  FETCH_RATE_FAILED,
  FETCH_RATE_SUCCESS,
  SET_TRANSACTION,
  RESET,
} from '../actions/actionTypes';

const initialState = {
  show: false,
  fetching: false,
  status: false,
  rate: [],
  transaction: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BUY_TOKEN:
      const transaction = state.show ? {} : state.transaction;
      return {
        ...state,
        show: !state.show,
        transaction,
      };
    case FETCH_RATE:
      return {
        ...state,
        fetching: true,
        status: false,
      };
    case FETCH_RATE_SUCCESS:
      return {
        ...state,
        fetching: false,
        status: true,
        rate: action.payload,
      };
    case FETCH_RATE_FAILED:
      return {
        ...state,
        fetching: false,
        status: false,
        rate: [],
      };
    case SET_TRANSACTION:
      return {
        ...state,
        transaction: action.payload,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
