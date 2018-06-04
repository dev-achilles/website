/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Tuesday, 29th May 2018 1:41:05 pm
 * Last Modified: Monday, 4th June 2018 9:57:23 am
 */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Label } from 'reactstrap';
import {
  AvForm,
  AvGroup,
  AvInput,
  AvRadioGroup,
  AvRadio,
  AvFeedback,
  AvField,
} from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';
import { Button } from '../../components';
import nationalities from './nationality.json';

import { submitInfo } from '../../actions';

class VerificationStep2 extends Component {
  static propTypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {
      disabledCustomAmout: true,
    };
  }

  _onChangeIntended = (e) => {
    const { value } = e.target;
    const disabledCustomAmout = value !== '50+';
    this.setState({ disabledCustomAmout });
  };

  submitStep2 = () => {
    this.form.submit();
  };

  handleSubmit = (
    event, errors, values,
  ) => {
    // eslint-disable-next-line
    this.setState({ errors, values });
    if (errors.length === 0) {
      this.props.submitInfo(values);
    }
  };
  renderNationality = () => {
    const data = ['Select nationality', ...nationalities];
    const options = data.map((nationality, index) => {
      const value = nationality !== 'Select nationality' ? nationality : '';
      return (
        // eslint-disable-next-line
        <option key={index.toString()} value={value}>
          {nationality}
        </option>
      );
    });
    return options;
  };

  renderCountry = () => {
    const countries = [{ name: 'Select country', code: '' }, ...this.props.countries];
    return countries.map((country, index) => (
      // eslint-disable-next-line
      <option key={index} value={country.code}>
        {country.name}
      </option>
    ));
  };

  renderCryptos = () => {
    const cryptos = [{ name: 'Select type', code: '' }, ...this.props.cryptos];
    return cryptos.map((country, index) => (
      // eslint-disable-next-line
      <option key={index} value={country.code}>
        {country.name}
      </option>
    ));
  };

  render() {
    return (
      <Row>
        <Col>
          <h4>Personal Infomation</h4>
          <AvForm
            ref={(ref) => {
              this.form = ref;
            }}
            onSubmit={this.handleSubmit}
            className="personal"
          >
            <AvField type="select" name="country" label="Country of residence" required>
              {this.renderCountry()}
            </AvField>

            <AvGroup>
              <Label for="first_name">First Name</Label>
              <AvInput
                type="text"
                name="first_name"
                id="first_name"
                placeholder="First Name"
                required
              />
            </AvGroup>
            <AvGroup>
              <Label for="last_name">Last Name</Label>
              <AvInput
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Last Name"
                required
              />
            </AvGroup>

            <AvField type="select" name="nationality" label="Nationality" required>
              {this.renderNationality()}
            </AvField>
            <AvGroup>
              <Label for="birthday">Date of birth</Label>
              <AvInput
                type="date"
                name="birthday"
                id="birthday"
                placeholder="Your birthday"
                validate={{
                  dateRange: {
                    format: 'MM/DD/YYYY',
                    start: { value: '01/01/1930' },
                    end: { value: '12/31/2005' },
                  },
                }}
                required
              />
            </AvGroup>
            <AvField type="select" name="fund_address[type]" label="Contributed by" required>
              {this.renderCryptos()}
            </AvField>

            <AvGroup>
              <Label for="fund_address">Wallet address</Label>
              <AvInput
                type="text"
                name="fund_address[address]"
                id="fund_address"
                placeholder="Wallet Address"
                required
              />
            </AvGroup>
            <AvRadioGroup name="intended" label="Intended amount" required errorMessage="Pick one!">
              <AvRadio label="0.5-1" value="0.5-1" onChange={this._onChangeIntended} />
              <AvRadio label="1-5" value="1-5" onChange={this._onChangeIntended} />
              <AvRadio label="5-10" value="5-10" onChange={this._onChangeIntended} />
              <AvRadio label="10-50" value="10-50" onChange={this._onChangeIntended} />
              <AvRadio label="50+" value="50+" onChange={this._onChangeIntended} />
            </AvRadioGroup>
            <AvGroup>
              <AvInput
                type="number"
                name="intended"
                placeholder="Or type amount"
                disabled={this.state.disabledCustomAmout}
                required
              />
            </AvGroup>
            <Button
              className="button-light full-width"
              upperCase
              iconRight="long-arrow-right"
              onClick={this.submitStep2}
            >
              Submit
            </Button>
          </AvForm>
          {this.props.children}
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  ...state.settings,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    submitInfo,
  },
  dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(VerificationStep2);
