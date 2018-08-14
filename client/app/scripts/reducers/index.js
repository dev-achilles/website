/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Thursday, 29th March 2018 11:10:48 am
 * Last Modified: Friday, 10th August 2018 4:01:44 pm
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
import referral from './referral';
import airdrop from './airdrop';

const reducer = {
  airdrop,
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
  referral,
};

export default reducer;
