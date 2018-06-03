/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 3rd June 2018 4:41:38 pm
 * Last Modified: Sunday, 3rd June 2018 4:42:47 pm
 */

import { FETCH_WALLET, SET_WALLET } from './actionTypes';

export const fetchWallet = () => ({
  type: FETCH_WALLET,
});

export const setWallet = data => ({
  type: SET_WALLET,
  payload: data,
});
