/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Wednesday, 23rd May 2018 11:24:43 am
 * Last Modified: Sunday, 3rd June 2018 3:30:35 pm
 */

import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  RESET,
  UPDATE_USER,
  SIGNUP_SUCCESS,
  FORGOT_SUCCESS,
  RESET_SUCCESS,
  SET_KEYPAIR,
} from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  status: 0,
  token: '',
  signup: false,
  forgot: false,
  reset: false,
  keypair: {
    public_key: '',
    private_key: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_KEYPAIR:
      return {
        ...state,
        keypair: {
          public_key: action.payload.public_key,
          private_key: action.payload.private_key,
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        status: action.payload.user.status,
        isAuthenticated: true,
        token: action.payload.token,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signup: true,
      };
    case FORGOT_SUCCESS:
      return {
        ...state,
        forgot: true,
      };
    case RESET_SUCCESS:
      return {
        ...state,
        reset: true,
      };
    case UPDATE_USER:
      return {
        ...state,
        status: action.payload.status,
      };

    case LOGIN_FAILED:
    case RESET:
      return initialState;
    default:
      return state;
  }
};
