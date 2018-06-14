/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 20th May 2018 10:35:35 am
 * Last Modified: Thursday, 14th June 2018 11:45:55 am
 */
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  RESET,
  UPDATE_USER,
  UPDATE_USER_STATUS,
} from '../actions/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        ...action.payload,
      };
    case UPDATE_USER_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case LOGIN_SUCCESS:
      return action.payload.user;

    case LOGIN_FAILED:
    case RESET:
      return initialState;
    default:
      return state;
  }
};
