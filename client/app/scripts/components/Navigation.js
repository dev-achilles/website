/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Thursday, 29th March 2018 5:56:44 pm
 * Last Modified: Tuesday, 22nd May 2018 3:53:09 pm
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
  Button,
} from 'reactstrap';
import { go, push, replace } from 'react-router-redux';
import uuidv1 from 'uuid/v1';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      navbarClass: this.props.isHome ? ['home'] : ['page'],
    };
  }
  componentDidMount = () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset >= 100) {
      const navbarClass = this.props.isHome ? ['home', 'fixed-top'] : ['page', 'fixed-top'];
      this.setState({ navbarClass });
    }
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  onClick = (e) => {
    e.preventDefault();
    this.props.goHome('/');
  };

  handleScroll = (event) => {
    const windowsScrollTop = window.pageYOffset;
    let { navbarClass } = this.state;
    if (windowsScrollTop >= 100) {
      navbarClass = this.props.isHome ? ['home', 'fixed-top'] : ['page', 'fixed-top'];
    } else {
      navbarClass = this.props.isHome ? ['home'] : ['page'];
    }
    this.setState({ navbarClass });
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const d = Object.assign({ show: false }, this.props.data);
    if (!d.show) return null;

    const renderMenu = () =>
      d.nav.map(menu => (
        <NavItem key={uuidv1()}>
          <NavLink href={menu.url}>{menu.title}</NavLink>
        </NavItem>
      ));
    return (
      <Navbar
        color="faded"
        light
        expand="md"
        id="nav1"
        className={this.state.navbarClass.join(' ')}
      >
        <div className="container no-padding">
          <NavbarBrand href="/#" onClick={this.onClick}>
            <img
              src={require('../../assets/images/logoHawking.png')}
              alt={d.title}
              className="logoImage"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {renderMenu()}
              {d.button.show ? (
                <a href={d.button.link} className="join btn btn-secondary">
                  ${d.button.text}222
                </a>
              ) : null}
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  goHome: url => dispatch(replace(url)),
  dispatch,
});
export default connect(null, mapDispatchToProps)(Navigation);
