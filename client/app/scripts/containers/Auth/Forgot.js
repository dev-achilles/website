/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 20th May 2018 10:11:30 am
 * Last Modified: Monday, 11th June 2018 1:18:10 pm
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ForgotComponent, Navigation } from '../../components';

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
    const { forgot, home } = this.props;
    return (
      <div className="page-auth" id="page-auth">
        <Navigation isHome />
        {!forgot ? <ForgotComponent /> : this.renderThankyou()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.auth,
});
export default connect(mapStateToProps)(Forgot);
