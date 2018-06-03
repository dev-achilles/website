/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Saturday, 2nd June 2018 11:20:55 am
 * Last Modified: Saturday, 2nd June 2018 11:36:26 am
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ResetComponent, Navigation2 } from '../../components';

export class ResetPassword extends Component {
  constructor(props) {
    super(props);
  }

  renderThankyou = () => (
    <div className="thankyou" id="thankyou">
      <h1>Success</h1>
      <p>You have successfully reset your password</p>
      <Link to="/login">Return to log in screen</Link>
    </div>
  );

  render() {
    const { reset } = this.props;
    const { code } = this.props.match.params;
    return (
      <div className="page-auth" id="page-auth">
        <Navigation2 isHome data={{}} />
        {!reset ? <ResetComponent code={code} /> : this.renderThankyou()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.auth,
});
export default connect(mapStateToProps)(ResetPassword);
