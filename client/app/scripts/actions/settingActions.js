/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Tuesday, 10th April 2018 2:11:57 pm
 * Last Modified: Wednesday, 30th May 2018 7:17:06 am
 */
import { SET_SETTINGS, FETCH_SETTINGS } from './actionTypes';

export const fetchSettings = data => ({
  type: FETCH_SETTINGS,
});

export const setSettings = data => ({
  type: SET_SETTINGS,
  payload: data,
});
