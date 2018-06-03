/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 1st April 2018 8:52:18 pm
 * Last Modified: Tuesday, 29th May 2018 2:34:05 am
 */

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { hideLoading } from '../actions';

class Loading extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount = () => {};
  componentDidMount = () => {
    if (this.props.loading) {
      this.id = setTimeout(() => {
        this.props.hideLoading();
      }, 10000);
    }
  };

  componentWillUnmount = () => {
    if (this.id) clearTimeout(this.id);
  };

  render() {
    const classes = this.props.loading ? 'show' : '';

    return (
      <div id="loading-container" className={classes}>
        <div className="loading-wrap">
          <div id="loading" />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.loading,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    hideLoading,
  },
  dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Loading);
