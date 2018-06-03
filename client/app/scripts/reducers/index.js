/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Thursday, 29th March 2018 11:10:48 am
 * Last Modified: Sunday, 3rd June 2018 4:40:50 pm
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
};

export default reducer;
