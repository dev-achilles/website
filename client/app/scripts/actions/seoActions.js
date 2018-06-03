/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Wednesday, 30th May 2018 6:53:10 am
 * Last Modified: Wednesday, 30th May 2018 6:53:28 am
 */
import { SET_TITLE, SET_OG, SET_DESC } from './actionTypes';

export const setTitle = title => ({
  type: SET_TITLE,
  payload: title,
});

export const setDesc = desc => ({
  type: SET_DESC,
  payload: desc,
});

export const setOG = og => ({
  type: SET_OG,
  payload: og,
});
