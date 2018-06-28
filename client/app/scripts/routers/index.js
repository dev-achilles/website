/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Wednesday, 23rd May 2018 11:19:47 am
 * Last Modified: Wednesday, 20th June 2018 12:32:05 am
 */
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
  Home,
  Contact,
  NotFound,
  Page,
  Login,
  SignUp,
  Forgot,
  Verified,
  Dashboard,
  Wallet,
  AirDrop,
  Account,
  Reset,
  Keypair,
} from '../containers/index';
import { Preloader, SystemAlerts, Loading } from '../components';

import PrivateRoute from './private';
import SEO from '../components/SEO';

class Router extends Component {
  render() {
    return (
      <div className="primary-layout">
        <SEO />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/forgot" component={Forgot} />
            <Route path="/reset-password/:code" component={Reset} />
            <Route path="/contact" component={Contact} />
            <Route path="/page/:slug" component={Page} />
            <PrivateRoute path="/verify" component={Verified} />
            <PrivateRoute path="/keypair" component={Keypair} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/wallet" exact component={Wallet} />
            <PrivateRoute path="/account" exact component={Account} />
            <PrivateRoute path="/airdrop" exact component={AirDrop} />
            <Route path="/page/:id" component={Page} />
            {/* <Route path="/404" exact component={NotFound} /> */}
            {/* <Redirect from="*" to="/404" /> */}
          </Switch>
        </main>
        <Preloader />
        <SystemAlerts />
        <Loading />
      </div>
    );
  }
}

export default Router;
