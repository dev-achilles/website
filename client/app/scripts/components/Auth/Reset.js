/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Saturday, 2nd June 2018 11:24:13 am
 * Last Modified: Saturday, 2nd June 2018 11:34:00 am
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Label } from 'reactstrap';
import PropTypes from 'prop-types';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import Recaptcha from 'react-recaptcha';
import { submitReset } from '../../actions';
import Button from '../Button';
import SocialAuth from './Social';
import { recaptcha } from '../../configs';

class ResetComponent extends Component {
  static propTypes = {
    code: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      recaptcha: '',
    };
  }
  handleSubmit = async (event, errors, values) => {
    // eslint-disable-next-line
    this.setState({ errors, values });
    if (!this.state.recaptcha) errors.push('recaptcha');
    if (errors.length === 0) {
      values.recaptcha = this.state.recaptcha;
      values.code = this.props.code;
      this.props.submitReset(values);
    }
    console.log(
      'errors', errors, 'values', values,
    );
  };

  verifyCallback = (response) => {
    this.setState({ recaptcha: response });
  };
  callback = () => {};
  expiredCallback = () => {
    this.recaptchaInstance.reset();
  };
  resetRecaptcha = () => {
    this.recaptchaInstance.reset();
  };

  render() {
    return (
      <div className="auth" id="auth">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-8 col-lg-6">
              <h1>RESET PASSWORD</h1>
              <AvForm
                className="auth-form"
                ref={(ref) => {
                  this.form = ref;
                }}
                onSubmit={this.handleSubmit}
              >
                <AvGroup>
                  <Label for="assword">Password</Label>
                  <AvInput
                    type="password"
                    name="password"
                    id="assword"
                    placeholder="Your password"
                    minLength="8"
                    required
                  />
                  <AvFeedback>Password must be at least 8 characters</AvFeedback>
                </AvGroup>
                <AvGroup>
                  <Label for="confirmPassword">Confirm Password</Label>
                  <AvInput
                    type="password"
                    name="confirm_password"
                    id="confirmPassword"
                    placeholder="Your password"
                    required
                    validate={{ match: { value: 'password' } }}
                  />
                  <AvFeedback>Password does not match</AvFeedback>
                </AvGroup>
                <AvGroup>
                  <Recaptcha
                    ref={(e) => {
                      this.recaptchaInstance = e;
                    }}
                    sitekey={recaptcha.sitekey}
                    render="explicit"
                    verifyCallback={this.verifyCallback}
                    onloadCallback={this.callback}
                    expiredCallback={this.expiredCallback}
                    name="recaptcha"
                  >
                    <Button onClick={this.resetRecaptcha} />
                  </Recaptcha>
                </AvGroup>
                <Button
                  className="button-light full-width"
                  upperCase
                  iconRight="long-arrow-right"
                  onClick={() => {
                    this.form.submit();
                  }}
                >
                  Submit
                </Button>
              </AvForm>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    submitReset,
  },
  dispatch);

export default connect(null, mapDispatchToProps)(ResetComponent);
