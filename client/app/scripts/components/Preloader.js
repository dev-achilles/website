/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Monday, 2nd April 2018 10:48:52 am
 * Last Modified: Friday, 20th April 2018 4:38:59 pm
 */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

class Loader extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount = () => {};

  render() {
    const classes = !this.props.display ? 'loaded' : '';

    return (
      <div id="preloader" className={classes}>
        <div id="loader" />
        <div className="loader-section loader-top" />
        <div className="loader-section loader-bottom" />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  display: state.preloader.display,
});
export default connect(mapStateToProps)(Loader);
