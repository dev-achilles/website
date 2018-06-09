/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 20th May 2018 10:11:23 am
 * Last Modified: Friday, 8th June 2018 7:57:32 am
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push, replace } from 'react-router-redux';

import {
  LoginComponent,
  ForgotComponent,
  Navigation,
  VerifyEmailComponent,
} from '../../components';

export class Login extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount = () => {
    if (this.props.status > 0 && this.props.isAuthenticated) this.props.replaceRoute('/wallet');
  };

  componentWillReceiveProps = (nextProps) => {
    if (
      this.props.status !== nextProps.status &&
      nextProps.status > 0 &&
      nextProps.isAuthenticated
    ) {
      this.props.replaceRoute('/wallet');
    }
  };

  renderBody = () => {
    const { isAuthenticated, status } = this.props;
    if (!isAuthenticated) return <LoginComponent />;

    if (status === 0) return <VerifyEmailComponent />;

    return null;
  };

  render() {
    return (
      <div className="page-auth" id="page-auth">
        <Navigation isHome data={{}} />
        {this.renderBody()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.auth,
});
const mapDispatchToProps = dispatch => ({
  changeRoute: url => dispatch(push(url)),
  replaceRoute: url => dispatch(replace(url)),
  dispatch,
});

export default connect(mapStateToProps,
  mapDispatchToProps)(Login);
