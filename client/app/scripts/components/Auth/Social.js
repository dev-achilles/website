/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Tuesday, 22nd May 2018 11:32:41 pm
 * Last Modified: Tuesday, 22nd May 2018 11:33:31 pm
 */
import React, { Component } from 'react';

class SocialAuthComponent extends Component {
  render() {
    return (
      <div className="login-social">
        <p>Or Sign Up with</p>
        <div className="social-list">
          <a href="/auth/facebook" alt="login facebook" className="btn-icon" onClick={(e) => {}}>
            <i className="fa fa-facebook" />
          </a>
          <a href="/auth/facebook" alt="login facebook" className="btn-icon" onClick={(e) => {}}>
            <i className="fa fa-facebook" />
          </a>
          <a href="/auth/facebook" alt="login facebook" className="btn-icon" onClick={(e) => {}}>
            <i className="fa fa-facebook" />
          </a>
          <a href="/auth/facebook" alt="login facebook" className="btn-icon" onClick={(e) => {}}>
            <i className="fa fa-facebook" />
          </a>
        </div>
      </div>
    );
  }
}

export default SocialAuthComponent;
