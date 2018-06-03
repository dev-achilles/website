/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Monday, 28th May 2018 5:14:05 pm
 * Last Modified: Saturday, 2nd June 2018 9:15:59 am
 */

import {
  SUBMIT_LOGIN,
  SUBMIT_FORGOT,
  SUBMIT_SIGNUP,
  SUBMIT_RESET,
  RESET,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  RESEND_CODE,
  SUBMIT_VERIFICATION_CODE,
} from './actionTypes';

export const submitLogin = data => ({
  type: SUBMIT_LOGIN,
  payload: data,
});

export const submitForgot = data => ({
  type: SUBMIT_FORGOT,
  payload: data,
});

export const submitReset = data => ({
  type: SUBMIT_RESET,
  payload: data,
});

export const loginSucess = data => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const loginFailed = () => ({
  type: LOGIN_FAILED,
});

export const resendCode = () => ({
  type: RESEND_CODE,
});

export const submitVerificationCode = data => ({
  type: SUBMIT_VERIFICATION_CODE,
  payload: data,
});

export const submitLogout = () => ({
  type: RESET,
});

export const submitSignUp = data => ({
  type: SUBMIT_SIGNUP,
  payload: data,
});
