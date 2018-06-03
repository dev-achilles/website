/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Wednesday, 23rd May 2018 12:50:12 am
 * Last Modified: Sunday, 3rd June 2018 3:44:02 pm
 */
import React, { Component } from 'react';
import { Button, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export class SideBar extends Component {
  static propTypes = {
    active: PropTypes.string,
  };
  static defaultProps = {
    active: 'dashboard',
  };
  render() {
    const { active } = this.props;
    return (
      <Col sm="4" className="sidebar" id="sidebar">
        <div className="items">
          {/* <Link to="/dashboard" className={classnames({ active: active === 'dashboard' })}>
            <i className="fa fa-home" />Dashboard
          </Link> */}
          <Link to="/wallet" className={classnames({ active: active === 'wallet' })}>
            <i className="fa fa-credit-card" />Wallet
          </Link>
          {/* <Link to="/airdrop" className={classnames({ active: active === 'airdrop' })}>
            <i className="fa fa-link" />AirDrop
          </Link> */}
          <Link to="/account" className={classnames({ active: active === 'account' })}>
            <i className="fa fa-user" />Account
          </Link>
        </div>
      </Col>
    );
  }
}

export default SideBar;
