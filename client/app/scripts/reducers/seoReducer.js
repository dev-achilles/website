/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Wednesday, 30th May 2018 6:53:46 am
 * Last Modified: Thursday, 31st May 2018 2:21:54 pm
 */
import { SET_TITLE, SET_DESC, SET_OG } from '../actions/actionTypes';

const initialState = {
  title: 'Hawking Network',
  desc: '',
  og: {
    title: '',
    desc: '',
    image: '',
    url: '',
    type: 'website',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case SET_DESC:
      return {
        ...state,
        desc: action.payload,
      };
    case SET_OG:
      return {
        ...state,
        og: Object.assign({
          title: '',
          desc: '',
          image: '',
          url: '',
          type: 'website',
        }),
      };
    default:
      return state;
  }
};
