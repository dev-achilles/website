/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Tuesday, 29th May 2018 11:51:36 am
 * Last Modified: Thursday, 14th June 2018 4:20:03 pm
 */
import {
  UPDATE_USER,
  SUBMIT_USER_INFO,
  SUBMIT_USER_PHOTO,
  FETCH_KEYPAIR,
  SET_KEYPAIR,
  FETCH_USER_STATUS,
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

export const fetchUserStatus = () => ({
  type: FETCH_USER_STATUS,
});
