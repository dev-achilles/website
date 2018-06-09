/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 20th May 2018 10:47:16 am
 * Last Modified: Friday, 8th June 2018 7:53:47 am
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
    href: PropTypes.string,
  };
  static defaultProps = {
    onClick: () => {},
    iconLeft: '',
    iconRight: '',
    className: 'btn-dark',
    upperCase: false,
    disabled: false,
    href: '',
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
  renderButton() {
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
  render() {
    if (this.props.href !== '') {
      return (
        <a href={this.props.href} alt="" target="_blank">
          {this.renderButton()}
        </a>
      );
    }
    return this.renderButton();
  }
}
