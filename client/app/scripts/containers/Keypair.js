/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Saturday, 2nd June 2018 12:42:16 pm
 * Last Modified: Friday, 8th June 2018 7:58:35 am
 */
import React, { Component } from 'react';
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { CSVLink, CSVDownload } from 'react-csv';
import { go, push, replace } from 'react-router-redux';

import { Navigation, SideBarComponent, Button } from '../components';
import { fetchKeypair } from '../actions';

class Keypair extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _goWallet = () => {
    this.props.goUrl('/wallet');
  };
  _onSubmit = () => {
    this.form.submit();
  };
  _handleSubmit = (
    event, errors, values,
  ) => {
    // eslint-disable-next-line
    this.setState({ errors, values });
    if (errors.length === 0) {
      this.props.fetchKeypair(values);
    }
    console.log(
      'errors', errors, 'values', values,
    );
  };

  _save = (e) => {
    console.log('aaaaa');
  };

  _getCsvData = () => {
    if (this.props.keypair.public_key) {
      return [
        ['public_key', this.props.keypair.public_key],
        ['private_key', this.props.keypair.private_key],
      ];
    }
    return [];
  };
  _handleFocus = (e) => {
    e.target.select();
  };

  _renderHeader = () => (
    <div className="body-header">
      <div className="body-title">
        <i className="fa fa-info" />
        Process for a new account
      </div>
      <h2 className="body-heading">Create Account Keypair</h2>
      <p>
        To get started on using the Hawking network, you must first create a keypair (unless you
        have a Ledger Nano). The keypair consists of two parts:
      </p>
    </div>
  );

  _renderBody = () => (
    <div className="body-content">
      <AvForm
        ref={(ref) => {
          this.form = ref;
        }}
        onSubmit={this._handleSubmit}
      >
        <AvGroup className="info">
          <i className="fa fa-unlock" />
          <p>
            <strong>Public key:</strong> The public key is used to identify the account. It is also
            known as an account. This public key is used for receiving funds.
          </p>
        </AvGroup>
        <AvGroup className="info">
          <i className="fa fa-lock" />
          <p>
            <strong>Secret key:</strong> The secret key is used to access your account and make
            transactions. Keep this code safe and secure. Anyone with the code will have full access
            to the account and funds. If you lose the key, you will no longer be able to access the
            funds and there is no recovery mechanism.
          </p>
        </AvGroup>
        <AvGroup check>
          <Label check>
            I accept the <Link to="/tos">Terms of Use</Link>, understand the risks associated with
            cryptocurrencies, and know that Hawking does not issue or endorse any asset on the
            Hawking network..
            <AvInput type="checkbox" name="check5" required />
            <span className="checkmark" />
          </Label>
        </AvGroup>
        <Button
          className="button-light"
          upperCase
          onClick={this._onSubmit}
          disable={this.props.status !== 4}
        >
          Generate Keypair
        </Button>
      </AvForm>
    </div>
  );
  _renderKey = () => {
    if (this.props.keypair.public_key) {
      return (
        <div>
          <div className="keypair">
            <div className="memo">
              Keep your key secure. This secret key will only be showed to you once. StellarTerm
              does not save it and will not be able to help you recover it if lost.
            </div>
            <div className="info form-group">
              <i className="fa fa-unlock" />
              <div className="key-info">
                <p className="name">Public key (will be your Account ID): </p>
                <input
                  className="key"
                  value={this.props.keypair.public_key}
                  onFocus={this._handleFocus}
                  readOnly
                />
              </div>
            </div>
            <div className="info form-group">
              <i className="fa fa-lock" />
              <div className="key-info">
                <p className="name">Secret key (SAVE THIS AND KEEP THIS SECURE): </p>
                <input
                  className="key"
                  value={this.props.keypair.private_key}
                  onFocus={this._handleFocus}
                  readOnly
                />
              </div>
            </div>
            <CSVLink
              data={this._getCsvData()}
              filename="hawking-key.csv"
              className="button-light full-width button-save"
              onClick={this._save}
            >
              Save
            </CSVLink>
          </div>
          <Button
            className="button-light"
            upperCase
            onClick={this._goWallet}
            disable={this.props.status !== 4}
          >
            Go to Wallet
          </Button>
        </div>
      );
    }
    return null;
  };
  _renderInfo = () => (
    <div className="body-content">
      {this._renderKey()}
      <div className="separate" />
      <div>
        <h5>Account generation security notes</h5>
        <p>
          The key is generated using entropy from TweetNaCl's randomByte function which, in most
          browsers, uses get RandomValues from the Web Cryptography API. However, using a secure
          random number generation does not protect you from a compromised computer. Take great care
          to make sure your computer is secure and do not run this on a computer you do not trust.
        </p>
      </div>
    </div>
  );

  render() {
    return (
      <div className="page-keypair" id="page">
        <Row>
          <Col>
            <Navigation isFixed data={{}} />
          </Col>
        </Row>
        <Row className="body" id="keypair">
          <SideBarComponent active="wallet" />
          <Col sm="12" md="8" lg="8" className="content">
            {this._renderHeader()}
            {this._renderBody()}
            {this._renderInfo()}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.auth,
});

const mapDispatchToProps = dispatch => ({
  goUrl: url => dispatch(replace(url)),
  fetchKeypair: () => dispatch(fetchKeypair()),
  dispatch,
});
export default connect(mapStateToProps,
  mapDispatchToProps)(Keypair);
