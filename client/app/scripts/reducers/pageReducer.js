/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Wednesday, 20th June 2018 6:05:14 am
 * Last Modified: Wednesday, 20th June 2018 6:08:26 am
 */
import { FETCH_PAGE, FETCH_PAGE_FAILED, FETCH_PAGE_SUCCESS, RESET } from '../actions/actionTypes';

const initialState = {
  status: false,
  fetching: false,
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAGE:
      return {
        ...state,
        fetching: true,
        status: false,
      };
    case FETCH_PAGE_SUCCESS:
      return {
        ...state,
        fetching: false,
        status: true,
        items: [...state.items, action.payload],
      };

    case FETCH_PAGE_FAILED:
      return {
        ...state,
        fetching: false,
        status: false,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
