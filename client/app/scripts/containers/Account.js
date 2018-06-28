/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Thursday, 31st May 2018 4:18:31 pm
 * Last Modified: Tuesday, 26th June 2018 9:41:55 am
 */
import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import {
  TabContent,
  TabPane,
  Nav,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Table,
  Collapse,
  Card,
  CardBody,
} from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';

import { Link } from 'react-router-dom';
import { go, push, replace } from 'react-router-redux';
import QRCode from 'qrcode.react';
import { fetchUser, toggleAddAddress, deteleAddress, changePassword } from '../actions';
import { Navigation, SideBarComponent, Button, AddAddress } from '../components';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changePassword: false,
    };
  }

  componentWillMount = () => {
    if (
      typeof this.props.hawking_address === 'undefined' ||
      typeof this.props.fund_address === 'undefined'
    ) {
      this.props.fetchUser();
    }
  };

  componentWillReceiveProps = (nextProps) => {
    console.log('aaaaaaaa');
    this._onShowForm();
  };

  _onAddWallet = () => {
    this.props.toggleAddAddress();
  };

  _onRemoveWallet = (id) => {
    this.props.deteleAddress(id);
  };

  _onShowForm = () => {
    this.setState({ changePassword: !this.state.changePassword });
  };

  _onCancel = () => {
    this.form.reset();
    this._onShowForm();
  };

  _handleSubmitChangePassword = (
    event, errors, values,
  ) => {
    // eslint-disable-next-line
    this.setState({ errors, values });
    if (errors.length === 0) {
      this.props.changePassword(values);
    }
  };

  renderAccount = () => (
    <div className="account">
      <h3>Account</h3>
      <Row>
        <Col>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" id="email" value={this.props.email} disabled />
          </FormGroup>

          <FormGroup>
            <Label for="password">Password</Label>
            <div className="password">
              <Input type="password" id="current_password" value="1212121" disabled />
              <Button className="button-white" upperCase onClick={this._onShowForm}>
                Change
              </Button>
            </div>
            <Collapse isOpen={this.state.changePassword}>
              <Card>
                <CardBody>
                  <AvForm
                    ref={(ref) => {
                      this.form = ref;
                    }}
                    onSubmit={this._handleSubmitChangePassword}
                  >
                    <AvGroup>
                      <Label for="password">Password</Label>
                      <AvInput
                        type="password"
                        name="password"
                        id="password"
                        placeholder=""
                        minLength="8"
                        required
                      />
                      <AvFeedback>Password must be at least 8 characters</AvFeedback>
                    </AvGroup>
                    <AvGroup>
                      <Label for="confirm_password">Confirm password</Label>
                      <AvInput
                        type="password"
                        name="confirm_password"
                        id="confirm_password"
                        placeholder=""
                        required
                        validate={{ match: { value: 'password' } }}
                      />
                      <AvFeedback>Password does not match</AvFeedback>
                    </AvGroup>
                    <Button className="button-white" upperCase onClick={this._onCancel}>
                      Cancel
                    </Button>
                    <Button className="button-light" upperCase onClick={() => this.form.submit()}>
                      Update
                    </Button>
                  </AvForm>
                </CardBody>
              </Card>
            </Collapse>
          </FormGroup>
        </Col>
      </Row>
    </div>
  );

  renderHawking = () => {
    if (typeof this.props.hawking_address !== 'undefined') {
      return (
        <div className="hawking">
          <h3>Hawking Address</h3>
          <Row>
            <Col className="hawking-qr">
              <QRCode value={this.props.hawking_address.public_key} />
            </Col>
            <Col className="hawking-info">
              <p>This is your Hawking address</p>
              <Input value={this.props.hawking_address.public_key} type="text" disabled />
            </Col>
          </Row>
        </div>
      );
    }
    return null;
  };

  renderWallet = () => {
    const renderItems = this.props.fund_address.map((item) => {
      if (item.enable) {
        return (
          <tr key={uuidv1()}>
            <td className="wallet-type">{item.type}</td>
            <td className="wallet-address">
              <Input type="text" value={item.address} disabled />
            </td>
            <td className="wallet-action">
              <Button
                className="button-light"
                upperCase
                iconRight="trash"
                onClick={() => this._onRemoveWallet(item._id)}
              >
                Remove
              </Button>
            </td>
          </tr>
        );
      }
      return null;
    });
    return (
      <div className="wallets">
        <h3>Contributed Address</h3>
        <div className="wallets-content">
          <div className="wallets-header">
            <Button className="button-light" upperCase iconRight="plus" onClick={this._onAddWallet}>
              Add
            </Button>
          </div>
          <div className="wallets-body">
            <Table responsive>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>{renderItems}</tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  };

  render() {
    if (
      typeof this.props.hawking_address === 'undefined' ||
      typeof this.props.fund_address === 'undefined'
    ) {
      return null;
    }

    return (
      <div className="page-account" id="page">
        <Row>
          <Col>
            <Navigation isFixed data={{}} />
          </Col>
        </Row>
        <Row className="body">
          <SideBarComponent active="account" />
          <Col sm="12" md="8" lg="8" className="content">
            {this.renderAccount()}
            {this.renderHawking()}
            {this.renderWallet()}
          </Col>
        </Row>
        <AddAddress
          ref={(ref) => {
            this.modal = ref;
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.user,
});

const mapDispatchToProps = dispatch => ({
  goUrl: url => dispatch(push(url)),
  fetchUser: () => dispatch(fetchUser()),
  toggleAddAddress: () => dispatch(toggleAddAddress()),
  deteleAddress: id => dispatch(deteleAddress(id)),
  changePassword: values => dispatch(changePassword(values)),
  dispatch,
});

export default connect(mapStateToProps,
  mapDispatchToProps)(Account);
