/*
 * File: AirDrop.js
 * Project: react-boilerplate
 * File Created: Monday, 23rd July 2018 10:47:17 pm
 * Author: Navi Ocean (navi.ocean@outlook.com)
 * -----
 * Last Modified: Tuesday, 14th August 2018 9:56:49 pm
 * Modified By: Navi Ocean (navi.ocean@outlook.com>)
 * -----
 * Copyright <<projectCreationYear>> - 2018 Hawking LLC, Hawking LLC
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import _ from 'lodash';
import {
  TabContent,
  TabPane,
  Nav,
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
  AirDropComponent,
  AirDropInviteTab,
  AirDropFollowTab,
  AirDropPromoteTab,
  AirDropCreatedTab,
} from '../components';
import { fetchAirdrop } from '../actions';

class AirDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '3',
    };
  }
  componentWillMount = () => {
    this.props.fetchAirdrop();
  };

  _toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  renderHeader = () => (
    <div className="header">
      <h2 className="header-title">AirDrop</h2>
      <div className="header-right">
        <AirDropComponent total={this.props.progress.total} asigned={this.props.progress.asigned} />
      </div>
    </div>
  );
  renderTab = () => (
    <Nav tabs>
      <NavItem>
        <NavLink
          className={classnames({ active: this.state.activeTab === '1' })}
          onClick={() => {
            this._toggle('1');
          }}
        >
          Invite
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({ active: this.state.activeTab === '2' })}
          onClick={() => {
            this._toggle('2');
          }}
        >
          Follow
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({ active: this.state.activeTab === '3' })}
          onClick={() => {
            this._toggle('3');
          }}
        >
          Promote
        </NavLink>
      </NavItem>
      {/* <NavItem>
        <NavLink
          className={classnames({ active: this.state.activeTab === '4' })}
          onClick={() => {
            this._toggle('4');
          }}
        >
          Created
        </NavLink>
      </NavItem> */}
    </Nav>
  );
  renderContent = () => (
    <TabContent activeTab={this.state.activeTab}>
      <TabPane tabId="1">
        <AirDropInviteTab />
      </TabPane>
      <TabPane tabId="2">
        <AirDropFollowTab />
      </TabPane>
      <TabPane tabId="3">
        <AirDropPromoteTab />
      </TabPane>
      <TabPane tabId="4">
        <AirDropCreatedTab />
      </TabPane>
    </TabContent>
  );
  render() {
    if (_.isEmpty(this.props.progress)) return null;
    if (!this.props.progress.enable) {
      return (
        <div className="page-airdrop" id="page">
          <Row>
            <Col>
              <Navigation isFixed data={{}} />
            </Col>
          </Row>
          <Row className="body">
            <SideBarComponent active="airdrop" />
            <Col sm="12" md="8" lg="8" className="content">
              <div>Airdrop is closed</div>
            </Col>
          </Row>
        </div>
      );
    }

    return (
      <div className="page-airdrop" id="page">
        <Row>
          <Col>
            <Navigation isFixed data={{}} />
          </Col>
        </Row>
        <Row className="body">
          <SideBarComponent active="airdrop" />
          <Col sm="12" md="8" lg="8" className="content">
            {this.renderHeader()}
            {this.renderTab()}
            {this.renderContent()}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  progress: state.airdrop.progress,
});

const mapDispatchToProps = dispatch => ({
  fetchAirdrop: () => dispatch(fetchAirdrop()),
  dispatch,
});

export default connect(mapStateToProps,
  mapDispatchToProps)(AirDrop);
