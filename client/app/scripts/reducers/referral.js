import { SET_REFERRAL, RESET } from '../actions/actionTypes';

const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_REFERRAL:
      return action.payload;
    case RESET:
      return initialState;
    default:
      return state;
  }
};
