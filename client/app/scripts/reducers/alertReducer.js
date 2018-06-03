/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Friday, 20th April 2018 1:41:02 am
 * Last Modified: Friday, 20th April 2018 2:14:25 am
 */
import { SHOW_ALERT, HIDE_ALERT, RESET } from '../actions/actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return [...state, action.payload];
    case HIDE_ALERT:
      return state.filter((alert) => {
        if (alert.id === action.payload.id) {
          return false;
        }
        return true;
      });
    case RESET:
      return initialState;
    default:
      return state;
  }
};
