/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Thursday, 12th April 2018 3:16:38 pm
 * Last Modified: Sunday, 10th June 2018 8:51:07 pm
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Label, Input } from 'reactstrap';
import uuidv1 from 'uuid/v1';
import PropTypes from 'prop-types';
import Recaptcha from 'react-recaptcha';
import { recaptcha } from '../configs';
import { sendContact } from '../actions';
import Button from './Button';

class Contact extends Component {
  static propTypes = {
    display: PropTypes.bool,
  };
  static defaultProps = {
    display: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      recpatcha: '',
      focus: {
        name: '',
        email: '',
        message: '',
      },
      validate: {
        name: '',
        email: '',
        message: '',
      },
      name: '',
      email: '',
      message: '',
    };
    console.log(recaptcha.sitekey);
  }

  onFocus = (name) => {
    const { focus } = this.state;
    focus[name] = 'input-focus';
    this.setState({ ...this.state, focus });
  };
  onBlur = (e, name) => {
    const { value } = e.currentTarget;
    const { focus } = this.state;
    if (!value) focus[name] = '';
    else focus[name] = 'input-focused';
    this.setState({ ...this.state, focus });
  };

  onChange = (e, name) => {
    const { value } = e.currentTarget;
    this.state[name] = value;
    this.validate(value, name);
  };

  validate = (value, name) => {
    const { validate } = this.state;
    if ((!value && name !== 'email') || (name === 'email' && !this.validateEmail(value))) {
      validate[name] = 'error';
    } else {
      validate[name] = 'valid';
    }

    this.setState({ ...this.state, validate });
  };
  validateEmail = (email) => {
    /* eslint no-useless-escape: 0 */
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(email).toLowerCase())) return false;
    return true;
  };
  submitForm = () => {
    const {
      name, email, message, recpatcha,
    } = this.state;
    const { validate } = this.state;
    if (!name || !email || !message || !recpatcha) {
      this.validate(name, 'name');
      this.validate(email, 'email');
      this.validate(message, 'message');
      return false;
    }
    this.props.sendContact({
      email,
      name,
      message,
      recpatcha,
    });
    return true;
  };
  verifyCallback = (response) => {
    this.setState({ recpatcha: response });
  };
  callback = () => {};
  expiredCallback = () => {
    this.recaptchaInstance.reset();
  };
  resetRecaptcha = () => {
    this.recaptchaInstance.reset();
  };
  render() {
    const d = Object.assign({ show: false }, this.props.data);
    if (d.show || this.props.display) {
      const renderInfo = () =>
        d.info.map(info => (
          <li key={uuidv1()}>
            <a href={info.url} alt={info.title}>
              <i className={`fa ${info.icon}`} />
            </a>
            <span>{info.title}</span>
          </li>
        ));

      return (
        <div className="contact text-center" id="contact">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-10 mx-auto">
                <h2 className="section-heading">{d.heading}</h2>
                <p>{d.sub}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <ul className="contact-info">{renderInfo()}</ul>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div id="contact-form" className="form-message text-center">
                  <div className={`input-field ${this.state.focus.name}`}>
                    <Input
                      id="contact-name"
                      name="contact-name"
                      type="text"
                      className={`input-line required name ${this.state.validate.name}`}
                      onFocus={() => this.onFocus('name')}
                      onBlur={e => this.onBlur(e, 'name')}
                      onChange={e => this.onChange(e, 'name')}
                    />
                    <Label className="input-title" htmlFor="contact-name">
                      Your Name
                    </Label>
                  </div>
                  <div className={`input-field ${this.state.focus.email}`}>
                    <Input
                      id="contact-email"
                      name="contact-email"
                      type="email"
                      className={`input-line required email ${this.state.validate.email}`}
                      onFocus={() => this.onFocus('email')}
                      onBlur={e => this.onBlur(e, 'email')}
                      onChange={e => this.onChange(e, 'email')}
                    />
                    <Label className="input-title" htmlFor="contact-email">
                      Your Email
                    </Label>
                  </div>
                  <div className={`input-field ${this.state.focus.message}`}>
                    <textarea
                      id="contact-message"
                      name="contact-message"
                      className={`txtarea input-line required ${this.state.validate.message}`}
                      onFocus={() => this.onFocus('message')}
                      onBlur={e => this.onBlur(e, 'message')}
                      onChange={e => this.onChange(e, 'message')}
                    />

                    <Label className="input-title" htmlFor="contact-message">
                      Your Message
                    </Label>
                  </div>
                  <div className="text-center">
                    <Recaptcha
                      ref={(e) => {
                        this.recaptchaInstance = e;
                      }}
                      sitekey={recaptcha.sitekey}
                      render="explicit"
                      verifyCallback={this.verifyCallback}
                      onloadCallback={this.callback}
                      expiredCallback={this.expiredCallback}
                    />
                  </div>
                  <div className="input-field">
                    <Button
                      className="button-light full-width"
                      upperCase
                      iconRight="long-arrow-right"
                      onClick={this.submitForm}
                    >
                      {d.button.text}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    sendContact,
  },
  dispatch);
export default connect(null,
  mapDispatchToProps)(Contact);
