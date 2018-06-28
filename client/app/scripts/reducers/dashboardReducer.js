/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Friday, 22nd June 2018 6:54:22 am
 * Last Modified: Friday, 22nd June 2018 7:02:50 am
 */
import { SET_DASHBOARD, RESET } from '../actions/actionTypes';

const initialState = {
  sales: [],
  statics: [],
  transactions: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DASHBOARD:
      return {
        ...state,
        sales: action.payload.sales,
        transactions: action.payload.transactions,
      };

    case RESET:
      return initialState;
    default:
      return state;
  }
};
