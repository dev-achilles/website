/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 1st April 2018 8:19:42 pm
 * Last Modified: Friday, 20th April 2018 8:16:56 pm
 */
import {
  FETCH_HOME_SUCCESS,
  FETCH_HOME_FAILED,
  FETCH_HOME_INPROCESS,
  RESET,
} from '../actions/actionTypes';

const initialState = {
  fetching: false,
  status: false,
  data: {},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOME_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.payload,
        status: true,
      };
    case FETCH_HOME_FAILED:
      return {
        ...state,
        fetching: false,
        data: {},
        status: false,
      };
    case FETCH_HOME_INPROCESS:
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
