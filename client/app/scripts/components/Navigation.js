/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 20th May 2018 12:24:27 pm
 * Last Modified: Monday, 11th June 2018 8:15:51 am
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { go, push, replace } from 'react-router-redux';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';
import Button from './Button';
import { submitLogout } from '../actions';

class Navigation2 extends Component {
  static propTypes = {
    isFixed: PropTypes.bool,
  };
  static defaultProps = {
    isFixed: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      isMyAccountOpen: false,
      navbarClass: this.props.isHome ? ['home'] : ['page'],
    };
  }

  componentDidMount = () => {
    if (!this.props.isFixed) {
      if (window.pageYOffset >= 100) {
        const navbarClass = this.props.isHome ? ['home', 'fixed-top'] : ['page', 'fixed-top'];
        this.setState({ navbarClass });
      }
      window.addEventListener('scroll', this.handleScroll);
    }
  };

  componentWillUnmount = () => {
    if (!this.props.isFixed) window.removeEventListener('scroll', this.handleScroll);
  };

  onClick = (e) => {
    e.preventDefault();
    this.props.goUrl('/');
  };

  handleScroll = (event) => {
    const windowsScrollTop = window.pageYOffset;
    let { navbarClass } = this.state;
    if (windowsScrollTop >= 60) {
      navbarClass = this.props.isHome ? ['home', 'fixed-top'] : ['page', 'fixed-top'];
    } else {
      navbarClass = this.props.isHome ? ['home'] : ['page'];
    }
    this.setState({ navbarClass });
  };

  _toggle = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  };

  _toggleMyAccount = () => {
    this.setState({
      isMyAccountOpen: !this.state.isMyAccountOpen,
    });
  };
  _onLogin = () => {
    this.props.goUrl('/login');
  };

  _onSignUp = () => {
    this.props.goUrl('/signup');
  };

  _onLogout = () => {
    this.props.logout();
  };
  _renderAuthButton = () => (
    <div>
      <Button onClick={this._onLogin}>Login</Button>
      <Button onClick={this._onSignUp} className="button-light">
        Sign Up
      </Button>
    </div>
  );

  _renderMyAccount = () => (
    <Dropdown
      nav
      isOpen={this.state.isMyAccountOpen}
      toggle={this._toggleMyAccount}
      className="my-account"
    >
      <DropdownToggle nav caret>
        <i className="fa fa-user-circle-o" />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => this.props.goUrl('dashboard')}>Dashboard</DropdownItem>
        <DropdownItem onClick={() => this.props.goUrl('wallet')}>My Wallet</DropdownItem>
        <DropdownItem onClick={() => this.props.goUrl('account')}>My Account</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={this._onLogout}>Logout</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );

  render() {
    const d = Object.assign({ show: false }, this.props.data);
    if (!d.show) return null;

    const renderMenu = () =>
      d.nav.map(menu => (
        <NavItem key={uuidv1()}>
          <NavLink href={menu.url}>{menu.title}</NavLink>
        </NavItem>
      ));

    const { isAuthenticated } = this.props;
    return (
      <Navbar color="faded" light expand="md" id="nav" className={this.state.navbarClass.join(' ')}>
        <NavbarBrand href="/#" onClick={this.onClick}>
          <img src={require('../../assets/images/logo.png')} alt={d.title} className="logoImage" />
        </NavbarBrand>
        <NavbarToggler onClick={this._toggle} className="custom-toggler" />
        <Collapse isOpen={this.state.isMenuOpen} navbar>
          <Nav className="ml-auto" navbar>
            {renderMenu()}
            {isAuthenticated ? this._renderMyAccount() : this._renderAuthButton()}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
const mapStateToProps = state => ({
  ...state.auth,
});
const mapDispatchToProps = dispatch => ({
  goUrl: url => dispatch(push(url)),
  logout: () => dispatch(submitLogout()),
  dispatch,
});
export default connect(mapStateToProps,
  mapDispatchToProps)(Navigation2);
