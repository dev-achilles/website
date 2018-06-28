/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Tuesday, 29th May 2018 1:27:27 am
 * Last Modified: Wednesday, 27th June 2018 8:30:03 am
 */
import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';
import { bindActionCreators } from 'redux';
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
import _ from 'lodash';
import { Link } from 'react-router-dom';
import {
  Navigation,
  SideBarComponent,
  Button,
  ScheduleItem,
  SummaryItem,
  BuyToken,
  AddAddress,
} from '../components';
import { fetchDashboard, toggleBuyToken } from '../actions';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.summary = [
      {
        type: 'invest',
        headline: 1201,
        description: 'Total Investments',
      },
      {
        type: 'contrib',
        headline: '$130.000',
        description: 'Total Contributions',
      },
      {
        type: 'available',
        headline: '12.000.000',
        description: 'HWK Available',
      },
      {
        type: 'sold',
        headline: '12.000',
        description: 'HWK Sold',
      },
    ];
  }

  componentWillMount = () => {
    this.props.fetchDashboard();
  };

  _onRefresh = () => {
    this.props.fetchDashboard();
  };

  _onBuyToken = () => {
    this.props.toggleBuyToken();
  };

  renderSummary = () => {
    const renderSummaryItems = this.summary.map((item, index) => (
      <SummaryItem key={uuidv1()} item={item} />
    ));
    return (
      <div className="summary">
        <h3>ICO Summary</h3>
        <Row>{renderSummaryItems}</Row>
      </div>
    );
  };

  renderSchedule = () => {
    const items = _.sortBy(
      this.props.sales, ['startTime'], ['asc'],
    );
    const renderScheduleItems = items.map(item => (
      <ScheduleItem key={uuidv1()} item={item} onBuyToken={this._onBuyToken} />
    ));
    return (
      <div className="schedule">
        <h3>ICO Schedule</h3>
        {renderScheduleItems}
      </div>
    );
  };

  renderYourOrders = () => {
    const { transactions } = this.props;
    if (transactions.length === 0) return null;
    return (
      <div className="orders">
        <h3>Your Orders</h3>
      </div>
    );
  };

  render() {
    return (
      <div className="page-dashboard" id="page">
        <Row>
          <Col>
            <Navigation isFixed />
          </Col>
        </Row>
        <Row className="body">
          <SideBarComponent active="dashboard" />
          <Col sm="12" md="8" lg="8" className="content">
            {this.renderSummary()}
            {this.renderSchedule()}
            {this.renderYourOrders()}
          </Col>
        </Row>
        <BuyToken />
        <AddAddress />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.dashboard,
});

const mapDispatchToProps = dispatch => ({
  fetchDashboard: () => dispatch(fetchDashboard()),
  toggleBuyToken: () => dispatch(toggleBuyToken()),
  dispatch,
});

export default connect(mapStateToProps,
  mapDispatchToProps)(Dashboard);
