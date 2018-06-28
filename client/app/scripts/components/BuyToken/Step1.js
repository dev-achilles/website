/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Friday, 22nd June 2018 9:43:31 am
 * Last Modified: Thursday, 28th June 2018 11:43:33 am
 */
import React, { Component, Fragment } from 'react';
import { AvForm, AvGroup, AvRadioGroup, AvRadio, AvInput } from 'availity-reactstrap-validation';
import { Label, Collapse } from 'reactstrap';
import uuidv1 from 'uuid/v1';
import { fetchRate, fetchUser, toggleAddAddress } from '../../actions';

export class Step1 extends Component {
  constructor(props) {
    super(props);
    /* eslint-disable */
    this.state = {
      showAddress: false,
      showAmount: false,
      funding: {
        code: undefined,
        address: undefined,
        amount: 0,
      },
      hwk: 0,
    };
    /* eslint-enable */
  }
  componentDidMount = () => {
    this.props.fetchRate();
    if (
      typeof this.props.user.hawking_address === 'undefined' ||
      typeof this.props.user.fund_address === 'undefined'
    ) {
      this.props.fetchUser();
    }
  };

  componentWillUnmount = () => {
    console.log('unmount step1');
  };

  _getRate = () => {
    const rate = this.props.rate.find(r => r.code === this.state.funding.code);
    return rate;
  };

  _onChangeAmount = (e) => {
    const { value } = e.target;
    const { funding } = this.state;
    const rate = this._getRate();
    let hwk = (value * (1 / rate.rate)).toFixed(2);
    const bonus = parseFloat(rate.bonus) * hwk;
    hwk = parseFloat(hwk) + bonus;
    hwk = parseFloat(hwk).toFixed(2);
    funding.amount = value;
    this.setState({ funding, hwk });
  };

  _onSelectAddress = (e) => {
    const { value } = e.target;
    const { funding } = this.state;
    funding.address = value;
    this.setState({ showAmount: true, funding });
    console.log(value);
  };

  _onSelectCode = (e) => {
    const { value } = e.target;
    const { funding } = this.state;
    console.log(value);
    funding.code = value;
    this.setState({ showAddress: true, funding });
  };

  _onAddWallet = (e) => {
    e.preventDefault();
    this.props.toggleAddAddress();
  };

  submit = () => {
    this.form.submit();
  };

  handleSubmit = (
    event, errors, values,
  ) => {
    // eslint-disable-next-line
    this.setState({ errors, values });
    if (errors.length === 0) {
      this.props.submitTransaction(values);
    }
  };

  renderButtonSelection = item => (
    <div className="label-icon">
      <img className="icon" src={item.icon} alt="" /> {item.code}
    </div>
  );

  renderSelections = () =>
    this.props.rate.map(item => (
      <AvRadio
        key={uuidv1()}
        label={this.renderButtonSelection(item)}
        value={item.code}
        onChange={this._onSelectCode}
      />
    ));

  renderWallet = () => {
    let address = [];
    if (this.props.user.fund_address) {
      address = this.props.user.fund_address.filter((item) => {
        if (item.type === this.state.funding.code && item.enable) return true;
        return false;
      });
    }
    let radios = null;
    if (address.length > 0) {
      radios = address.map(add => (
        <AvRadio
          key={uuidv1()}
          label={add.address}
          value={add.address}
          onChange={this._onSelectAddress}
        />
      ));
    }
    return (
      <Collapse isOpen={this.state.showAddress}>
        <AvRadioGroup
          name="funding[address]"
          label="Choose Wallet"
          required
          errorMessage="Pick one!"
          className="funding-address"
        >
          {radios}
          <a href="/#" onClick={this._onAddWallet} className="add-wallet">
            + Add wallet
          </a>
        </AvRadioGroup>
      </Collapse>
    );
  };

  renderAmount = () => (
    <Collapse isOpen={this.state.showAmount}>
      <AvGroup>
        <Label for="amount">Amount</Label>
        <AvInput
          type="text"
          name="funding[amount]"
          id="amount"
          placeholder=""
          required
          value={this.state.funding.amount}
          onChange={this._onChangeAmount}
        />
      </AvGroup>
      <AvGroup>
        <Label for="hwk">Amount of HWK you will get</Label>
        <AvInput
          type="text"
          name="hwk"
          id="hwk"
          placeholder=""
          disabled
          value={this.state.hwk}
          ref={(ref) => {
            this.hwk = ref;
          }}
        />
      </AvGroup>
    </Collapse>
  );

  renderRate = () => {
    if (this.props.rate.length === 0 || !this.state.funding.code) return null;
    const rate = this._getRate();
    const amount = (1 / parseFloat(rate.rate)).toFixed(2);
    return (
      <div className="rate">
        <div className="conversion-rate">
          <strong>Conversion rate:</strong> 1 {this.state.funding.code} = {amount} HWK
        </div>
        <div className="conversion-bonus">
          * Bonus: {rate.bonus * 100}% (minimal purchase: {rate.min})
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="buy-token-step">
        <h2>Buy Token</h2>
        <AvForm
          ref={(ref) => {
            this.form = ref;
          }}
          onSubmit={this.handleSubmit}
        >
          <AvRadioGroup
            name="funding[code]"
            label="Deposit from"
            required
            errorMessage="Pick one!"
            className="funding-code"
          >
            {this.renderSelections()}
          </AvRadioGroup>
          {this.renderWallet()}
          {this.renderAmount()}
          {this.renderRate()}
        </AvForm>
      </div>
    );
  }
}

export default Step1;
