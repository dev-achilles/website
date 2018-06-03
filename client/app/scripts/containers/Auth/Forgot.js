/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 20th May 2018 10:11:30 am
 * Last Modified: Saturday, 2nd June 2018 11:23:29 am
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ForgotComponent, Navigation2 } from '../../components';

export class Forgot extends Component {
  constructor(props) {
    super(props);
  }

  renderThankyou = () => (
    <div className="thankyou" id="thankyou">
      <h1>Success</h1>
      <p>Please check your email to reset your password!</p>
    </div>
  );

  render() {
    const { forgot } = this.props;
    return (
      <div className="page-auth" id="page-auth">
        <Navigation2 isHome data={{}} />
        {!forgot ? <ForgotComponent /> : this.renderThankyou()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.auth,
});
export default connect(mapStateToProps)(Forgot);
