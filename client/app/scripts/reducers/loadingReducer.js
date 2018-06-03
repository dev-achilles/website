/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Friday, 20th April 2018 5:13:35 pm
 * Last Modified: Friday, 20th April 2018 5:14:07 pm
 */
import { SHOW_LOADING, HIDE_LOADING, RESET } from '../actions/actionTypes';

const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      return true;
    case HIDE_LOADING:
      return false;
    case RESET:
      return initialState;
    default:
      return state;
  }
};
