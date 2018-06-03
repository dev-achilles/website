/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Thursday, 29th March 2018 11:10:44 am
 * Last Modified: Sunday, 3rd June 2018 4:44:08 pm
 */
import { all, call } from 'redux-saga/effects';

import homeSagas from './homeSagas';
import subscribeSagas from './subscribeSagas';
import contactSagas from './contactSagas';
import authSagas from './authSagas';
import userSagas from './userSagas';
import settingSagas from './settingSagas';
import walletSagas from './walletSagas';

const sagas = [
  ...homeSagas,
  ...subscribeSagas,
  ...contactSagas,
  ...authSagas,
  ...userSagas,
  ...settingSagas,
  ...walletSagas,
];

export default function* root() {
  try {
    yield all(sagas.map(saga => call(saga)));
  } catch (error) {
    console.log(error);
  }
}
