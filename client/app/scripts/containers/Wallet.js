/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Thursday, 31st May 2018 4:15:43 pm
 * Last Modified: Thursday, 28th June 2018 11:40:54 am
 */
import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col, Label, Table, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import { go, push, replace } from 'react-router-redux';
import moment from 'moment';
import { Navigation, SideBarComponent, Button, BuyToken, AddAddress } from '../components';
import { fetchWallet, toggleBuyToken, setTransaction } from '../actions';

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: [],
    };
  }
  componentWillMount = () => {
    this.props.fetchWallet();
  };
  componentWillUnmount = () => {
    if (this.timeout) clearTimeout(this.timeout);
  };

  _onBuy = () => {
    this.props.toggleBuyToken();
  };

  _onClick = (item, index) => {
    if (item.confirmed) {
      const { collapse } = this.state;
      collapse[index] = typeof collapse[index] !== 'undefined' ? !collapse[index] : true;
      this.setState({ collapse });
    } else {
      this.props.setTransaction(item);
      this.timeout = setTimeout(() => {
        this.props.toggleBuyToken();
      }, 400);
    }
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
    this.props.transactions.map((item, index) => {
      let status = 'pending';
      switch (item.status) {
        case -1:
          status = 'denied';
          break;
        case 1:
          status = 'in progress';
          break;
        case 2:
          status = 'completed';
          break;
        default:
          status = 'pending';
      }
      status = item.confirmed ? status : 'unconfirmed';
      const button = item.confirmed ? 'Detail' : 'Confirm';
      const isOpen =
        typeof this.state.collapse[index] !== 'undefined' ? this.state.collapse[index] : false;
      let iconRight = isOpen ? 'angle-up' : 'angle-down';
      if (button === 'Confirm') iconRight = null;
      return (
        <Fragment>
          <tr className={classnames({ selected: isOpen })}>
            <td>{moment(item.createdAt).format('DD MMM,YYYY')}</td>
            <td className="type up">+</td>
            <td>{item.hwk_amount}</td>
            <td className={`status ${status.replace(' ', '-')}`}>{status}</td>
            <td>
              <Button onClick={() => this._onClick(item, index)} iconRight={iconRight}>
                {button}
              </Button>
            </td>
          </tr>
          <tr className={classnames('full', { selected: isOpen })}>
            <td colSpan="5">
              <Collapse isOpen={isOpen}>
                <div className="more-info">
                  <div className="label">Currency:</div> {item.funding.code}
                </div>
                <div className="more-info">
                  <div className="label">Amount:</div> {item.funding.amount}
                </div>
                <div className="more-info">
                  <div className="label">Send To:</div> {item.deposit_address}
                </div>
                <div className="more-info">
                  <div className="label">Transaction Id:</div> {item.transaction_id}
                </div>
                <div className="more-info">
                  <div className="label">Rate:</div> 1 HWK = {item.rate} {item.funding.code}
                </div>
                {item.bonus !== 0 ? (
                  <div className="more-info">
                    <div className="label">Bonus:</div> {item.bonus} %
                  </div>
                ) : null}
              </Collapse>
            </td>
          </tr>
        </Fragment>
      );
    });

  renderTransactions = () => (
    <div className="transactions">
      <h3>Transactions</h3>
      <div className="transactions-info">
        <Table hover responsive>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>
                Amount<p className="unit">(HWK)</p>
              </th>
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
            <Navigation isFixed />
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
        <BuyToken />
        <AddAddress />
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
  toggleBuyToken: () => dispatch(toggleBuyToken()),
  setTransaction: item => dispatch(setTransaction(item)),
  dispatch,
});

export default connect(mapStateToProps,
  mapDispatchToProps)(Wallet);
