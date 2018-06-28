/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Thursday, 29th March 2018 11:10:44 am
 * Last Modified: Friday, 22nd June 2018 6:59:55 am
 */
import { all, call } from 'redux-saga/effects';

import homeSagas from './homeSagas';
import subscribeSagas from './subscribeSagas';
import contactSagas from './contactSagas';
import authSagas from './authSagas';
import userSagas from './userSagas';
import settingSagas from './settingSagas';
import walletSagas from './walletSagas';
import pageSagas from './pageSagas';
import dashboardSagas from './dashboardSagas';
import transactionSagas from './transactionSagas';

const sagas = [
  ...homeSagas,
  ...subscribeSagas,
  ...contactSagas,
  ...authSagas,
  ...userSagas,
  ...settingSagas,
  ...walletSagas,
  ...pageSagas,
  ...dashboardSagas,
  ...transactionSagas,
];

export default function* root() {
  try {
    yield all(sagas.map(saga => call(saga)));
  } catch (error) {
    console.log(error);
  }
}
