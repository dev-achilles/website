/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Friday, 20th April 2018 7:53:18 pm
 * Last Modified: Friday, 20th April 2018 8:22:42 pm
 */
import {
  FETCH_CONTACT_SUCCESS,
  FETCH_CONTACT_FAILED,
  FETCH_CONTACT_INPROCESS,
  RESET,
} from '../actions/actionTypes';

const initialState = {
  fetching: false,
  data: {},
  status: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACT_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.payload,
        status: true,
      };
    case FETCH_CONTACT_FAILED:
      return {
        ...state,
        fetching: false,
        data: {},
        status: false,
      };
    case FETCH_CONTACT_INPROCESS:
      return {
        ...state,
        fetching: true,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
