/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 24th June 2018 11:58:54 pm
 * Last Modified: Tuesday, 26th June 2018 7:01:17 am
 */
import {
  ADD_ADDRESS,
  RESET,
  ADD_ADDRESS_FAILED,
  ADD_ADDRESS_SUCCESS,
  TOGGLE_ADD_ADDRESS,
} from '../actions/actionTypes';

const initialState = {
  fetching: false,
  status: false,
  show: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return {
        ...state,
        fetching: true,
      };
    case ADD_ADDRESS_FAILED:
      return {
        ...state,
        fetching: false,
        status: true,
      };
    case ADD_ADDRESS_SUCCESS:
      return {
        ...state,
        show: false,
        fetching: false,
        status: false,
      };
    case TOGGLE_ADD_ADDRESS:
      return {
        ...state,
        show: !state.show,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
