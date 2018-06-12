/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Tuesday, 22nd May 2018 11:31:28 pm
 * Last Modified: Tuesday, 12th June 2018 8:42:53 pm
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import Recaptcha from 'react-recaptcha';
import { submitForgot } from '../../actions';
import Button from '../Button';
import SocialAuth from './Social';
import { recaptcha } from '../../configs';

class ForgotComponent extends Component {
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
      this.props.submitForgot(values);
      this.resetRecaptcha();
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
              <h1>FORGOT PASSWORD</h1>
              <AvForm
                className="auth-form"
                ref={(ref) => {
                  this.form = ref;
                }}
                onSubmit={this.handleSubmit}
              >
                <AvGroup>
                  <Label for="email">Email</Label>
                  <AvInput
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Ex. you@company.com"
                    required
                  />
                  <AvFeedback>This field is invalid</AvFeedback>
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
                  />
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
    submitForgot,
  },
  dispatch);

export default connect(null,
  mapDispatchToProps)(ForgotComponent);
