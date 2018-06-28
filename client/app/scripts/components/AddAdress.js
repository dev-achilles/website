/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 24th June 2018 8:02:32 pm
 * Last Modified: Monday, 25th June 2018 12:37:00 am
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import { Modal, ModalHeader, ModalBody, ModalFooter, Container, Label } from 'reactstrap';
import uuidv1 from 'uuid/v1';
import { AvForm, AvGroup, AvRadioGroup, AvRadio, AvInput } from 'availity-reactstrap-validation';

import Button from './Button';
import { toggleAddAddress, fetchRate, addAddress } from '../actions';

class AddAddress extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    if (this.props.transaction.rate.length === 0) this.props.fetchRate();
  };

  toggle = () => {
    this.props.toggleAddAddress();
  };

  _onAddWallet = () => {
    this.form.submit();
  };

  handleSubmit = (
    event, errors, values,
  ) => {
    // eslint-disable-next-line
    this.setState({ errors, values });
    if (errors.length === 0) {
      console.log(values);
      this.props.addAddress(values);
    }
  };

  renderButtonSelection = item => (
    <div className="label-icon">
      <img className="icon" src={item.icon} alt="" /> {item.code}
    </div>
  );

  renderSelections = () =>
    this.props.transaction.rate.map(item => (
      <AvRadio
        key={uuidv1()}
        label={this.renderButtonSelection(item)}
        value={item.code}
        onChange={this._onChangeIntended}
      />
    ));

  renderBody = () => {
    if (this.props.transaction.rate.length > 0) {
      return (
        <AvForm
          ref={(ref) => {
            this.form = ref;
          }}
          onSubmit={this.handleSubmit}
        >
          <AvRadioGroup name="type" label="Type" required errorMessage="Pick one!">
            {this.renderSelections()}
          </AvRadioGroup>
          <AvGroup>
            <Label for="address">Address</Label>
            <AvInput type="text" name="address" id="address" placeholder="" required />
          </AvGroup>
        </AvForm>
      );
    }
    return null;
  };

  render() {
    return (
      <Modal isOpen={this.props.show} size="md" centered toggle={() => {}} className="add-address">
        <ModalHeader toggle={this.toggle}>Add New Address</ModalHeader>
        <ModalBody>{this.renderBody()}</ModalBody>
        <ModalFooter>
          <Button className="button-cancel" upperCase onClick={this.toggle}>
            Cancel
          </Button>
          <Button className="button-light" upperCase onClick={this._onAddWallet}>
            Submit
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  ...state.addAddress,
  transaction: state.transaction,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    toggleAddAddress,
    fetchRate,
    addAddress,
  },
  dispatch);

export default connect(mapStateToProps,
  mapDispatchToProps)(AddAddress);
