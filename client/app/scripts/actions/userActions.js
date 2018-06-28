/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Tuesday, 29th May 2018 11:51:36 am
 * Last Modified: Tuesday, 26th June 2018 8:11:52 am
 */
import {
  UPDATE_USER,
  SUBMIT_USER_INFO,
  SUBMIT_USER_PHOTO,
  FETCH_KEYPAIR,
  SET_KEYPAIR,
  FETCH_USER_STATUS,
  FETCH_USER,
  ADD_ADDRESS,
  ADD_ADDRESS_FAILED,
  ADD_ADDRESS_SUCCESS,
  TOGGLE_ADD_ADDRESS,
  DELETE_ADDRESS,
  CHANGE_PASSWORD,
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

export const fetchUser = () => ({
  type: FETCH_USER,
});

export const addAddress = data => ({
  type: ADD_ADDRESS,
  payload: data,
});

export const addAddressSuccess = () => ({
  type: ADD_ADDRESS_SUCCESS,
});

export const addAddressFailed = () => ({
  type: ADD_ADDRESS_FAILED,
});

export const deteleAddress = data => ({
  type: DELETE_ADDRESS,
  payload: data,
});

export const toggleAddAddress = () => ({
  type: TOGGLE_ADD_ADDRESS,
});

export const changePassword = data => ({
  type: CHANGE_PASSWORD,
  payload: data,
});
