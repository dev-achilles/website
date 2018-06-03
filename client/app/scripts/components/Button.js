/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 20th May 2018 10:47:16 am
 * Last Modified: Sunday, 27th May 2018 6:52:24 pm
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

export default class ButtonComponent extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string,
    upperCase: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
  };
  static defaultProps = {
    onClick: () => {},
    iconLeft: '',
    iconRight: '',
    className: 'btn-dark',
    upperCase: false,
    disabled: false,
  };

  _renderIcon = name => <i className={`fa fa-${name}`} />;

  _renderRight = () => {
    if (this.props.iconRight) {
      return <div className="button-right">{this._renderIcon(this.props.iconRight)}</div>;
    }
    return null;
  };

  _renderLeft = () => {
    if (this.props.iconLeft) {
      return <div className="button-left">{this._renderIcon(this.props.iconLeft)}</div>;
    }
    return null;
  };

  _renderBody = () => {
    let className = 'button-text';
    if (this.props.upperCase) className += ' upperCase';
    return <div className={className}>{this.props.children}</div>;
  };
  render() {
    let { className } = this.props;
    if (this.props.iconLeft || this.props.iconRight) className += ' button-icon';
    return (
      <Button
        disabled={this.props.disabled}
        onClick={this.props.onClick}
        className={`button ${className}`}
      >
        {this._renderLeft()}
        {this._renderBody()}
        {this._renderRight()}
      </Button>
    );
  }
}
