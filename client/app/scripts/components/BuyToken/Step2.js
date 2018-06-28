/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Friday, 22nd June 2018 9:43:37 am
 * Last Modified: Thursday, 28th June 2018 6:46:45 am
 */
import React, { Component } from 'react';
import { AvForm, AvGroup, AvRadioGroup, AvRadio, AvInput } from 'availity-reactstrap-validation';
import { Label, Collapse, Row, Col } from 'reactstrap';
import uuidv1 from 'uuid/v1';
import _ from 'lodash';
import QRCode from 'qrcode.react';

export class Step2 extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount = () => {};

  submit = () => {
    this.form.submit();
  };

  handleSubmit = (
    event, errors, values,
  ) => {
    // eslint-disable-next-line
    this.setState({ errors, values });
    if (errors.length === 0) {
      values.id = this.props.transaction._id;
      console.log(values);
      this.props.confirmTransaction(values);
    }
  };

  render() {
    if (_.isEmpty(this.props.transaction)) return null;
    /* eslint-disable */
    const { funding, deposit_address } = this.props.transaction;
    return (
      <div className="buy-token-step2">
        <h2>Buy Token</h2>
        <p>Please send {funding.code} to the following address</p>
        <Row className="funding">
          <Col className="funding-info">
            <AvForm
              ref={ref => {
                this.form = ref;
              }}
              onSubmit={this.handleSubmit}
            >
              <AvGroup>
                <Label for="address">Address of the wallet</Label>
                <AvInput
                  type="text"
                  name="address"
                  id="address"
                  placeholder=""
                  value={deposit_address}
                  disabled
                />
              </AvGroup>
              <AvGroup>
                <Label for="amount">Amount</Label>
                <AvInput
                  type="text"
                  name="amount"
                  id="amount"
                  placeholder=""
                  value={funding.amount}
                  disabled
                />
              </AvGroup>
              <AvGroup>
                <Label for="transaction_id">Transaction ID</Label>
                <AvInput
                  type="text"
                  name="transaction_id"
                  id="transaction_id"
                  placeholder="Transaction Id"
                  required
                />
              </AvGroup>
            </AvForm>
          </Col>
          <Col className="funding-qr">
            <QRCode size={150} value={deposit_address} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Step2;
