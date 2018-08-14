/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Tuesday, 22nd May 2018 11:26:45 pm
 * Last Modified: Tuesday, 12th June 2018 8:42:41 pm
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import Recaptcha from 'react-recaptcha';
import { submitSignUp, setReferral } from '../../actions';
import Button from '../Button';
import SocialAuth from './Social';
import { recaptcha } from '../../configs';

class SignUpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recaptcha: '',
    };
  }
  componentDidMount = () => {
    if (this.props.clicked && this.props.referral) this.props.setReferral(this.props.referral);
  };

  handleSubmit = async (event, errors, values) => {
    // eslint-disable-next-line
    this.setState({ errors, values });
    if (!this.state.recaptcha) errors.push('recaptcha');
    if (errors.length === 0) {
      values.recaptcha = this.state.recaptcha;
      values.referral = this.props.referral;
      this.props.submitSignUp(values);
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
              <h1>SIGN UP</h1>
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
                  Sign up
                </Button>
              </AvForm>
              <div className="memo">
                By clicking "Sign Up", you agree to our <Link to="/tos">Terms</Link> and that you
                have read our <Link to="/policy">Privacy Policy</Link>.
              </div>
              {/* <div className="separate" />
              <SocialAuth /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    submitSignUp,
    setReferral,
  },
  dispatch);

export default connect(null,
  mapDispatchToProps)(SignUpComponent);
