/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Thursday, 29th March 2018 11:10:48 am
 * Last Modified: Sunday, 24th June 2018 11:59:42 pm
 */
import { routerReducer } from 'react-router-redux';

import home from './homeReducer';
import seo from './seoReducer';
import settings from './settingReducer';
import preloader from './preloaderReducer';
import alerts from './alertReducer';
import loading from './loadingReducer';
import contact from './contactReducer';
import auth from './authReducer';
import user from './userReducer';
import wallet from './walletReducer';
import page from './pageReducer';
import dashboard from './dashboardReducer';
import transaction from './transactionReducer';
import addAddress from './addAddressReducer';

const reducer = {
  seo,
  settings,
  alerts,
  home,
  preloader,
  loading,
  contact,
  router: routerReducer,
  auth,
  user,
  wallet,
  page,
  dashboard,
  transaction,
  addAddress,
};

export default reducer;
