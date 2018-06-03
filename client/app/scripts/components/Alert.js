/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Friday, 20th April 2018 2:32:31 pm
 * Last Modified: Friday, 20th April 2018 3:37:26 pm
 */
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { hideAlert } from '../actions';

class Alert extends Component {
  static propTypes = {
    position: PropTypes.string,
    autoClose: PropTypes.number,
    hideProgressBar: PropTypes.bool,
    newestOnTop: PropTypes.bool,
    closeOnClick: PropTypes.bool,
    rtl: PropTypes.bool,
    pauseOnVisibilityChange: PropTypes.bool,
    draggable: PropTypes.bool,
    pauseOnHover: PropTypes.bool,
    message: PropTypes.string.isRequired,
    type: PropTypes.string,
  };
  static defaultProps = {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnVisibilityChange: true,
    draggable: false,
    pauseOnHover: true,
    type: 'default',
  };
  componentDidMount = () => {
    console.log('mount alert');
    const { type } = this.props;
    toast(this.renderAlert, {
      type,
      onClose: this.onClose,
    });
  };
  onClose = () => {
    const { dispatch, id } = this.props;
    dispatch(hideAlert(id));
  };
  renderAlert = () => {
    const { type, message } = this.props;
    let icon;
    switch (type) {
      case 'success': {
        icon = 'fa fa-check-circle';
        break;
      }
      case 'error': {
        icon = 'fa fa-times-circle';
        break;
      }
      case 'warning': {
        icon = 'fa fa-exclamation-circle';
        break;
      }
      case 'info': {
        icon = 'fa fa-question-circle';
        break;
      }
      case 'black': {
        icon = 'fa fa-bell-o';
        break;
      }
      default: {
        icon = 'fa fa-dot-circle-o';
      }
    }
    return (
      <div className="app-alert">
        <div className="alert-icon">
          <i className={icon} />
        </div>
        <div className="alert-content">{message}</div>
      </div>
    );
  };
  render() {
    return (
      <ToastContainer
        position={this.props.position}
        autoClose={this.props.autoClose}
        hideProgressBar={this.props.hideProgressBar}
        newestOnTop={this.props.newestOnTop}
        closeOnClick={this.props.closeOnClick}
        rtl={this.props.rtl}
        pauseOnVisibilityChange={this.props.pauseOnVisibilityChange}
        draggable={this.props.draggable}
        pauseOnHover={this.props.pauseOnHover}
      />
    );
  }
}

export default Alert;
