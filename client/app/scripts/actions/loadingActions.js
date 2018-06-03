/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Friday, 20th April 2018 5:14:38 pm
 * Last Modified: Friday, 20th April 2018 5:14:59 pm
 */
import { SHOW_LOADING, HIDE_LOADING } from './actionTypes';

export const showLoading = () => ({
  type: SHOW_LOADING,
});

export const hideLoading = () => ({
  type: HIDE_LOADING,
});
