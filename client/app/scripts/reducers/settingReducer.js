/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Tuesday, 10th April 2018 2:06:40 pm
 * Last Modified: Monday, 11th June 2018 2:42:30 pm
 */
import { RESET, SET_SETTINGS } from '../actions/actionTypes';

const initialState = {
  countries: [],
  cryptos: [],
  docs: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SETTINGS:
      state = Object.assign(
        {}, state, action.payload,
      );
      return state;
    case RESET:
      return initialState;
    default:
      return state;
  }
};
