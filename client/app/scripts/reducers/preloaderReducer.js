/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Monday, 2nd April 2018 11:17:11 am
 * Last Modified: Monday, 2nd April 2018 11:18:23 am
 */
import { SHOW_PRELOADER, HIDE_PRELOADER, RESET } from '../actions/actionTypes';

const initialState = {
  display: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PRELOADER:
      return {
        display: true,
      };
    case HIDE_PRELOADER:
      return {
        display: false,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
