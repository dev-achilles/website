/*
 * File: airdrop.js
 * Project: react-boilerplate
 * File Created: Wednesday, 8th August 2018 6:48:42 am
 * Author: Navi Ocean (navi.ocean@outlook.com)
 * -----
 * Last Modified: Friday, 10th August 2018 10:30:42 pm
 * Modified By: Navi Ocean (navi.ocean@outlook.com>)
 * -----
 * Copyright <<projectCreationYear>> - 2018 Hawking LLC, Hawking LLC
 */
import { deepmerge } from '../helpers/utils';
import {
  FETCH_AIRDROP,
  SET_AIRDROP,
  RESET,
  UPDATE_FOLLOW,
  UPDATE_PROMOTE,
  UPDATE_CREATED,
} from '../actions/actionTypes';

const initialState = {
  progress: {},
  invite: {},
  follow: {},
  promote: {},
  created: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AIRDROP:
      return {
        ...state,
        ...action.payload,
      };
    case UPDATE_FOLLOW:
      return {
        ...state,
        follow: deepmerge(state.follow, action.payload.follow),
      };
    case UPDATE_PROMOTE:
      return {
        ...state,
        promote: deepmerge(state.promote, action.payload.promote),
      };
    case UPDATE_CREATED:
      return {
        ...state,
        created: deepmerge(state.created, action.payload.created),
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
