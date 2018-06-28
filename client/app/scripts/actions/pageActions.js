/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Wednesday, 20th June 2018 5:46:04 am
 * Last Modified: Wednesday, 20th June 2018 5:46:34 am
 */
import { FETCH_PAGE } from './actionTypes';

export const fetchPage = data => ({
  type: FETCH_PAGE,
  payload: data,
});
