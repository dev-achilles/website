/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Thursday, 31st May 2018 4:15:43 pm
 * Last Modified: Friday, 8th June 2018 7:58:53 am
 */
import React, { Component } from 'react';
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col, Label, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { go, push, replace } from 'react-router-redux';
import { Navigation, SideBarComponent, Button } from '../components';
import { fetchWallet } from '../actions';

class Wallet extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount = () => {
    this.props.fetchWallet();
  };

  _onBuy = () => {
    console.log('on buy hawking');
  };
  _onRefresh = () => {
    this.props.fetchWallet();
  };

  renderBalance = () => (
    <div className="balance">
      <h3>Your Balance</h3>
      <div className="balance-info">{this.props.balance} hawking</div>
    </div>
  );

  renderRowTransaction = () =>
    this.props.transactions.map(item => (
      <tr>
        <th scope="row">1</th>
        <td>25 Mar, 2018</td>
        <td className="type up">+</td>
        <td>5.000 HWK</td>
        <td className="pedding">Pending</td>
        <td>
          <Button>Detail</Button>
        </td>
      </tr>
    ));
  renderTransactions = () => (
    <div className="transactions">
      <h3>Transactions</h3>
      <div className="transactions-info">
        <Table hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>{this.renderRowTransaction()}</tbody>
        </Table>
      </div>
    </div>
  );
  renderHeader = () => (
    <div className="header">
      <h2 className="header-title">Wallet</h2>
      <div className="header-right">
        <Button className="button-refresh" upperCase onClick={this._onRefresh}>
          Refresh
        </Button>
        <Button className="button-light" upperCase onClick={this._onBuy}>
          Buy Hawking
        </Button>
      </div>
    </div>
  );
  render() {
    const keypair = false;
    return (
      <div className="page-wallet" id="page">
        <Row>
          <Col>
            <Navigation isFixed data={{}} />
          </Col>
        </Row>
        <Row className="body">
          <SideBarComponent active="wallet" />
          <Col sm="12" md="8" lg="8" className="content">
            {this.renderHeader()}
            <div className="separate" />
            {this.renderBalance()}
            {this.renderTransactions()}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.wallet,
});

const mapDispatchToProps = dispatch => ({
  goUrl: url => dispatch(push(url)),
  fetchWallet: () => dispatch(fetchWallet()),
  dispatch,
});

export default connect(mapStateToProps,
  mapDispatchToProps)(Wallet);
