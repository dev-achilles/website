/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Wednesday, 23rd May 2018 12:50:35 am
 * Last Modified: Friday, 8th June 2018 7:58:45 am
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import classnames from 'classnames';
import {
  TabContent,
  TabPane,
  Nav,
  Container,
  NavItem,
  NavLink,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import {
  Navigation,
  SideBarComponent,
  Button,
  VerificationStep1,
  VerificationStep2,
  VerificationStep3,
  VerificationStep4,
} from '../components';

import { fetchSettings } from '../actions';

class Verify extends Component {
  constructor(props) {
    super(props);
    const { status } = this.props.auth;
    this.state = {
      activeTab: this.getActiveTab(status),
    };
  }

  componentWillMount = () => {
    if (this.props.settings.countries.length === 0 || this.props.settings.cryptos.length === 0) {
      this.props.fetchSettings();
    }
  };
  componentWillReceiveProps = (nextProps) => {
    if (this.props.auth.status !== nextProps.auth.status) {
      this.state = {
        activeTab: this.getActiveTab(nextProps.auth.status),
      };
    }
  };

  componentWillUnmount = () => {};

  getActiveTab = (status) => {
    switch (status) {
      case 2:
        return '3';
      case 3:
        return '4';
      default:
        return '1';
    }
  };
  _renderHeader = () => (
    <div className="body-header">
      <div className="body-title">
        <i className="fa fa-lock" />
        Participation in ICO requires you to complete verification process
      </div>
      <h2 className="body-heading">Hawking verification</h2>
    </div>
  );

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };
  _renderTab = () => (
    <Nav tabs>
      <NavItem className={classnames({ active: this.state.activeTab >= '1' })}>
        <NavLink
          onClick={() => {
            // this.toggle('1');
          }}
        >
          1
        </NavLink>
      </NavItem>
      <NavItem className={classnames({ active: this.state.activeTab >= '2' })}>
        <NavLink
          onClick={() => {
            // this.toggle('2');
          }}
        >
          2
        </NavLink>
      </NavItem>
      <NavItem className={classnames({ active: this.state.activeTab >= '3' })}>
        <NavLink
          onClick={() => {
            // this.toggle('3');
          }}
        >
          3
        </NavLink>
      </NavItem>
      <NavItem className={classnames({ active: this.state.activeTab >= '4' })}>
        <NavLink
          onClick={() => {
            // this.toggle('3');
          }}
        >
          4
        </NavLink>
      </NavItem>
    </Nav>
  );

  _onClickCheckBoxStep1 = (e, checkbox) => {
    const { step1 } = this.state;
    step1[checkbox] = e.target.checked;
    step1.disableSubmit = false;
    /*eslint-disable*/
    for (var key in step1) {
      if (key.indexOf('check') !== -1 && step1[key] == false) step1['disableSubmit'] = true;
    }
    /* eslint-enable */
    this.setState({ step1 });
  };

  _renderInfo = () => (
    <div className="info">
      <p>We will not be accepting US, Chinese & Korean citizens due to legal restrictions.</p>
      <p>
        Please check out: <Link to="https://www.leekICO.com">https://www.leekICO.com</Link>
      </p>
    </div>
  );
  _renderContent = () => (
    <TabContent activeTab={this.state.activeTab}>
      <TabPane tabId="1">
        <VerificationStep1 submit={this.toggle}>{this._renderInfo()}</VerificationStep1>
      </TabPane>
      <TabPane tabId="2">
        <VerificationStep2 submit={this.toggle}>{this._renderInfo()}</VerificationStep2>
      </TabPane>
      <TabPane tabId="3">
        <VerificationStep3 submit={this.toggle}>{this._renderInfo()}</VerificationStep3>
      </TabPane>
      <TabPane tabId="4">
        <VerificationStep4 />
      </TabPane>
    </TabContent>
  );

  render() {
    return (
      <div className="page-verified" id="page">
        <Row>
          <Col>
            <Navigation isFixed data={{}} />
          </Col>
        </Row>
        <Row className="body">
          <SideBarComponent active="account" />
          <Col sm="12" md="8" lg="8" className="content">
            {this._renderHeader()}
            <div className="body-content">
              {this._renderTab()}
              {this._renderContent()}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
  auth: state.auth,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchSettings,
  },
  dispatch);
export default connect(mapStateToProps,
  mapDispatchToProps)(Verify);
