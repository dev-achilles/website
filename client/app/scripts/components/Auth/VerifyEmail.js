/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Tuesday, 29th May 2018 2:26:59 am
 * Last Modified: Tuesday, 29th May 2018 1:06:44 pm
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Button } from '../../components';
import { resendCode, submitVerificationCode } from '../../actions';

class VerifyComponent extends Component {
  handleSubmit = (
    event, errors, values,
  ) => {
    // eslint-disable-next-line
    this.setState({ errors, values });
    if (errors.length === 0) {
      this.props.submitVerificationCode(values.code);
    }
    console.log(
      'errors', errors, 'values', values,
    );
  };

  resendCode = (e) => {
    e.preventDefault();
    this.props.resendCode();
    console.log('resend code');
  };
  render() {
    return (
      <div className="thankyou" id="thankyou">
        <h1>Email verification</h1>
        <div className="info">
          We sent an email to <strong>{this.props.email}</strong> to make sure you own it. Please
          check your inbox and enter the security code below to finish setting up your account.
        </div>
        <AvForm
          ref={(ref) => {
            this.form = ref;
          }}
          onSubmit={this.handleSubmit}
        >
          <AvGroup>
            <AvInput name="code" id="code" placeholder="Enter your code" required />
            <AvFeedback>Code is required!</AvFeedback>
          </AvGroup>
          <Button
            className="button-light full-width"
            upperCase
            iconRight="long-arrow-right"
            onClick={() => {
              this.form.submit();
            }}
          >
            Next
          </Button>
        </AvForm>
        <p>
          Didn't receive the email?{' '}
          <a href="/#" onClick={this.resendCode}>
            Resend it now
          </a>.
        </p>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state.user,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    resendCode,
    submitVerificationCode,
  },
  dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(VerifyComponent);
