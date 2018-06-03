/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Monday, 2nd April 2018 11:16:19 am
 * Last Modified: Monday, 2nd April 2018 11:16:48 am
 */
import { SHOW_PRELOADER, HIDE_PRELOADER } from './actionTypes';

export const showPreLoader = () => ({
  type: SHOW_PRELOADER,
});

export const hidePreLoader = () => ({
  type: HIDE_PRELOADER,
});
