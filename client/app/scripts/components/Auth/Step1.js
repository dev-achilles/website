/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Tuesday, 29th May 2018 1:20:54 pm
 * Last Modified: Saturday, 16th June 2018 3:23:30 pm
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';
import { Button } from '../../components';

class VerificationStep1 extends Component {
  static propTypes = {
    submit: PropTypes.func.isRequired,
  };
  static defaultProps = {};

  submitStep1 = () => {
    this.form.submit();
  };

  handleSubmit = (
    event, errors, values,
  ) => {
    // eslint-disable-next-line
    this.setState({ errors, values });
    if (errors.length === 0) {
      this.props.submit('2');
    }
    console.log(
      'errors', errors, 'values', values,
    );
  };

  render() {
    return (
      <Row>
        <Col sm="12">
          <h4>Apply for Whitelist</h4>
          <p>
            In order to participate in the ICO, you have to apply to be whitelisted through our KYC
            verification process.
          </p>
          <AvForm
            ref={(ref) => {
              this.form = ref;
            }}
            onSubmit={this.handleSubmit}
          >
            <AvGroup check>
              <Label check>
                I agree to the Hawking <Link to="/tos">Terms & Conditions</Link> andx{' '}
                <Link to="/privacy">Privacy Policy</Link>
                <AvInput type="checkbox" name="check1" required />
                <span className="checkmark" />
              </Label>
            </AvGroup>
            <AvGroup check>
              <Label check>
                I am not located in the People's Republic of China, NOR am I a citizen or resident
                (tax or otherwise) of, or domiciled in, the People's Republic of China.
                <AvInput type="checkbox" name="check2" required />
                <span className="checkmark" />
              </Label>
            </AvGroup>
            {/* <AvGroup check>
              <Label check>
                I am not located in the United States of America or I am not a citizen, resident
                (tax or otherwise) or green card holder of, or domiciled in, the United States of
                America.
                <AvInput type="checkbox" name="check3" required />
                <span className="checkmark" />
              </Label>
            </AvGroup>
            <AvGroup check>
              <Label check>
                I am not located in the Republic of Korea, or I am not a citizen, resident (tax or
                otherwise) of, or domiciled in, the Republic of Korea.
                <AvInput type="checkbox" name="check4" required />
                <span className="checkmark" />
              </Label>
            </AvGroup>
            <AvGroup check>
              <Label check>
                I understand that such Registration and/or Token Sale is prohibited, restricted or
                unauthorized in any form or manner whether in full or in part under the laws,
                regulatory requirements or rules in any jurisdiction applicable to you, at the time
                of your Registration.
                <AvInput type="checkbox" name="check5" required />
                <span className="checkmark" />
              </Label>
            </AvGroup> */}
            <Button
              className="button-light full-width"
              upperCase
              iconRight="long-arrow-right"
              onClick={this.submitStep1}
            >
              Start Hawking Verification
            </Button>
          </AvForm>
          {this.props.children}
        </Col>
      </Row>
    );
  }
}

export default VerificationStep1;
