/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Friday, 20th April 2018 1:25:34 am
 * Last Modified: Friday, 20th April 2018 4:01:43 pm
 */
import uuid from 'uuid/v4';

import { HIDE_ALERT, SHOW_ALERT } from './actionTypes';

export const hideAlert = id => ({
  type: HIDE_ALERT,
  payload: { id },
});
export const showAlert = (message, options) => {
  options = Object.assign(
    {}, { id: uuid(), message }, options,
  );
  return {
    type: SHOW_ALERT,
    payload: options,
  };
};
