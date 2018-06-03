/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 1st April 2018 10:53:38 pm
 * Last Modified: Saturday, 14th April 2018 12:37:37 pm
 */
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';

class NotFound extends Component {
  goback = () => {
    this.props.goBack();
  };
  render() {
    return (
      <div className="not-found" id="not-found">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-sm-8">
              <img src={require('../../assets/images/404.png')} alt="404 not found" />
            </div>
          </div>
          <div className="row align-items-center justify-content-center content">
            <p>Oopssssss, page not found!</p>
            <Button className="join" onClick={this.goback}>
              Go Back
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(goBack()),
  dispatch,
});
export default connect(null, mapDispatchToProps)(NotFound);
