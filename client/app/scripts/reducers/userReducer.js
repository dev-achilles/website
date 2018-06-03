/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 20th May 2018 10:35:35 am
 * Last Modified: Sunday, 3rd June 2018 3:15:15 pm
 */
import { LOGIN_FAILED, LOGIN_SUCCESS, RESET, UPDATE_USER } from '../actions/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return action.payload;

    case LOGIN_SUCCESS:
      return action.payload.user;

    case LOGIN_FAILED:
    case RESET:
      return initialState;
    default:
      return state;
  }
};
