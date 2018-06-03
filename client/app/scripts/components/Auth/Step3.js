/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Wednesday, 30th May 2018 11:39:25 am
 * Last Modified: Thursday, 31st May 2018 2:41:25 pm
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvFeedback, AvField } from 'availity-reactstrap-validation';
import { submitPhoto } from '../../actions';
import Button from '../Button';
import UploadImage from '../UploadImage';

class VerificationStep3 extends Component {
  static propTypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);
  }
  submitStep3 = () => {
    this.form.submit();
  };
  handleSubmit = (
    event, errors, values,
  ) => {
    // eslint-disable-next-line
    this.setState({ errors, values });
    if (errors.length === 0) {
      this.props.submitPhoto(values);
    }
    console.log(
      'errors', errors, 'values', values,
    );
  };

  renderDocs = () => {
    const docs = [{ name: 'Select ID', code: '' }, ...this.props.docs];
    return docs.map((country, index) => (
      // eslint-disable-next-line
      <option key={index.toString()} value={country.code}>
        {country.name}
      </option>
    ));
  };
  render() {
    return (
      <Row>
        <Col>
          <h4>Verify your Indentify</h4>
          <p>
            Please ensure your uploaded photos are in good quality and your face can be clearly
            seen.
          </p>

          <AvForm
            ref={(ref) => {
              this.form = ref;
            }}
            onSubmit={this.handleSubmit}
            className="personal upload-docs"
          >
            <h5>Offical document</h5>
            <AvField
              type="select"
              name="type"
              label="ID type"
              helpMessage="Passport is preferred to improve the accuracy of the Hawking process."
              required
            >
              {this.renderDocs()}
            </AvField>

            <AvGroup>
              <Label for="front">Front cover of your offical ID</Label>
              <AvInput
                ref={(ref) => {
                  this.front = ref;
                }}
                type="text"
                name="front"
                id="front"
                className="upload"
                required
              />
              <UploadImage
                callback={(url) => {
                  this.front.value = url;
                }}
              />
              <AvFeedback>This field is invalid</AvFeedback>
            </AvGroup>
            <AvGroup>
              <Label for="detail">Personal data page of your offical ID</Label>
              <AvInput
                ref={(ref) => {
                  this.detail = ref;
                }}
                type="text"
                name="detail"
                id="detail"
                className="upload"
                required
              />
              <UploadImage
                callback={(url) => {
                  this.detail.value = url;
                }}
              />
              <AvFeedback>This field is invalid</AvFeedback>
            </AvGroup>
            <h5>Selfie Photo</h5>
            <AvGroup>
              <AvInput
                ref={(ref) => {
                  this.seflie = ref;
                }}
                type="text"
                name="seflie"
                id="seflie"
                className="upload"
                required
              />
              <UploadImage
                callback={(url) => {
                  console.log(url);
                  this.seflie.value = url;
                }}
              />
              <AvFeedback>This field is invalid</AvFeedback>
            </AvGroup>
            <Button
              className="button-light full-width"
              upperCase
              iconRight="long-arrow-right"
              onClick={this.submitStep3}
            >
              Finished
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
    submitPhoto,
  },
  dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(VerificationStep3);
