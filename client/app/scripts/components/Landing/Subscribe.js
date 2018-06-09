/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Saturday, 14th April 2018 8:05:17 pm
 * Last Modified: Friday, 8th June 2018 6:42:28 am
 */
/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Thursday, 12th April 2018 3:16:38 pm
 * Last Modified: Saturday, 14th April 2018 8:11:07 pm
 */
import React, { Component } from 'react';
import { Label, Input, Button } from 'reactstrap';
import uuidv1 from 'uuid/v1';
import PropTypes from 'prop-types';

export default class Subscribe extends Component {
  static propTypes: {
    data: PropTypes.Object.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      focus: {
        email: '',
      },
      validate: {
        email: '',
      },
      email: '',
    };
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
    if (!value || !this.validateEmail(value)) {
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
    const { email } = this.state;
    const { validate } = this.state;
    if (!email) {
      this.validate(email, 'email');
      return false;
    }
    console.log('aaaa');
    this.props.onSubmit(this.state.email);
    return true;
  };

  render() {
    const d = Object.assign({ show: false }, this.props.data);

    if (d.show) {
      return (
        <div className="section subscribe text-center" id="subscribe">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-10 mx-auto">
                <h3 className="section-heading">{d.heading}</h3>
                <p>{d.sub}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div id="subscribe-form" className="form-message text-center">
                  <div className={`input-field ${this.state.focus.email}`}>
                    <Input
                      id="subscribe-email"
                      name="subscribe-email"
                      type="email"
                      className="input-round required email"
                      onFocus={() => this.onFocus('email')}
                      onBlur={e => this.onBlur(e, 'email')}
                      onChange={e => this.onChange(e, 'email')}
                      placeholder="Your email"
                    />
                    <i className={`fa fa-exclamation ${this.state.validate.email}`} />
                  </div>
                  <div className="input-field">
                    <Button type="submit" className="join" onClick={this.submitForm}>
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
