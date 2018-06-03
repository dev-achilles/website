/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Friday, 20th April 2018 6:20:02 pm
 * Last Modified: Saturday, 21st April 2018 8:28:33 am
 */
import { FETCH_CONTACT, SEND_CONTACT } from './actionTypes';

export const fetchContact = () => ({
  type: FETCH_CONTACT,
});

export const sendContact = data => ({
  type: SEND_CONTACT,
  payload: data,
});
