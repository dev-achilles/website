/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 3rd June 2018 4:40:37 pm
 * Last Modified: Sunday, 3rd June 2018 4:43:42 pm
 */
import { SET_WALLET, RESET } from '../actions/actionTypes';

const initialState = {
  balance: 0,
  transactions: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_WALLET:
      return action.payload;

    case RESET:
      return initialState;
    default:
      return state;
  }
};
