/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Tuesday, 29th May 2018 11:51:36 am
 * Last Modified: Sunday, 3rd June 2018 4:43:02 pm
 */
import {
  UPDATE_USER,
  SUBMIT_USER_INFO,
  SUBMIT_USER_PHOTO,
  FETCH_KEYPAIR,
  SET_KEYPAIR,
} from './actionTypes';

export const submitInfo = data => ({
  type: SUBMIT_USER_INFO,
  payload: data,
});

export const submitPhoto = data => ({
  type: SUBMIT_USER_PHOTO,
  payload: data,
});

export const updateUser = data => ({
  type: UPDATE_USER,
  payload: data,
});

export const fetchKeypair = () => ({
  type: FETCH_KEYPAIR,
});

export const setKeypair = data => ({
  type: SET_KEYPAIR,
  payload: data,
});
