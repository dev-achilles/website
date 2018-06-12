/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 20th May 2018 12:20:09 pm
 * Last Modified: Tuesday, 12th June 2018 8:41:33 pm
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import Recaptcha from 'react-recaptcha';
import { submitLogin } from '../../actions';
import Button from '../Button';
import SocialAuth from './Social';
import { recaptcha } from '../../configs';

class LoginComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      recaptcha: '',
    };
  }

  handleSubmit = (
    event, errors, values,
  ) => {
    // eslint-disable-next-line
    this.setState({ errors, values });
    if (!this.state.recaptcha) errors.push('recaptcha');
    if (errors.length === 0) {
      values.recaptcha = this.state.recaptcha;
      this.props.submitLogin(values);
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
              <h1>SIGN IN</h1>
              <AvForm
                ref={(ref) => {
                  this.form = ref;
                }}
                className="auth-form"
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
                    validate={{ email: true }}
                  />
                  <AvFeedback>Email is invalid!</AvFeedback>
                </AvGroup>
                <AvGroup>
                  <Label for="assword">Password</Label>
                  <AvInput
                    type="password"
                    name="password"
                    id="assword"
                    placeholder="Your password"
                    required
                    minLength="8"
                  />
                  <AvFeedback>Password must be at least 8 characters!</AvFeedback>
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
                  Sign in
                </Button>
              </AvForm>
              <div className="separate" />
              <div className="forgot">
                <Link to="/forgot">Forgot Password?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    submitLogin,
  },
  dispatch);

export default connect(null,
  mapDispatchToProps)(LoginComponent);
