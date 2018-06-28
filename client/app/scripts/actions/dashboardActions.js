/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Friday, 22nd June 2018 6:53:43 am
 * Last Modified: Saturday, 23rd June 2018 4:15:38 pm
 */
import { FETCH_DASHBOARD, SET_DASHBOARD } from './actionTypes';

export const fetchDashboard = () => ({
  type: FETCH_DASHBOARD,
});

export const setDashboard = data => ({
  type: SET_DASHBOARD,
  payload: data,
});
