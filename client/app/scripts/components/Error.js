/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Saturday, 14th April 2018 7:47:54 pm
 * Last Modified: Friday, 20th April 2018 5:42:10 pm
 */
import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Error extends Component {
  goback = () => {
    window.location.reload();
  };
  render() {
    return (
      <div className="error-container" id="error">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-sm-8">
              <img src={require('../../assets/images/error.png')} alt="Error" />
            </div>
          </div>
          <div className="row align-items-center justify-content-center content">
            <p>Looks like something went wrong…</p>
            <Button className="join" onClick={this.goback}>
              Try again!
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Error;
