/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Thursday, 19th April 2018 11:29:23 pm
 * Last Modified: Friday, 20th April 2018 12:16:15 am
 */
import { SEND_SUBSCRIBE } from './actionTypes';

export const sendSubscribe = data => ({
  type: SEND_SUBSCRIBE,
  payload: data,
});
