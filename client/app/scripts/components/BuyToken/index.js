/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Friday, 22nd June 2018 9:05:22 am
 * Last Modified: Thursday, 28th June 2018 6:36:51 am
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  TabContent,
  TabPane,
  Nav,
  Container,
  NavItem,
  NavLink,
} from 'reactstrap';
import _ from 'lodash';
import {
  toggleBuyToken,
  fetchRate,
  fetchUser,
  toggleAddAddress,
  submitTransaction,
  confirmTransaction,
} from '../../actions';
import Step1 from './Step1';
import Step2 from './Step2';
import Button from '../Button';

class BuyToken extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: _.isEmpty(this.props.transaction) ? '1' : '2',
    };
  }

  componentWillMount = () => {
    console.log('dialog');
  };

  componentWillReceiveProps = (nextProps) => {
    if (this.props.transaction !== nextProps.transaction) {
      if (!_.isEmpty(nextProps.transaction)) {
        this.setState({ activeTab: '2' });
      } else {
        this.setState({ activeTab: '1' });
      }
    }
  };
  componentWillUnmount = () => {
    console.log('unmount');
  };

  getActiveTab = (status) => {
    switch (status) {
      case 2:
        return '3';
      case 3:
        return '4';
      default:
        return '1';
    }
  };

  submit = () => {
    if (this.state.activeTab === '1') {
      this.step1.submit();
    } else this.step2.submit();
  };

  next = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  _fetchUser = () => {
    this.props.fetchUser();
  };

  _fetchRate = () => {
    this.props.fetchRate();
  };

  _toggleAddAddress = () => {
    this.props.toggleAddAddress();
  };

  _submitTransaction = (params) => {
    this.props.submitTransaction(params);
  };

  _confirmTransaction = (params) => {
    this.props.confirmTransaction(params);
  };

  _renderTab = () => (
    <Nav tabs>
      <NavItem className={classnames({ active: this.state.activeTab >= '1' })}>
        <NavLink
          onClick={() => {
            this.next('1');
          }}
        >
          1
        </NavLink>
      </NavItem>
      <NavItem className={classnames({ active: this.state.activeTab >= '2' })}>
        <NavLink
          onClick={() => {
            this.next('2');
          }}
        >
          2
        </NavLink>
      </NavItem>
    </Nav>
  );

  _renderContent = () => (
    <TabContent activeTab={this.state.activeTab}>
      <TabPane tabId="1">
        <Step1
          ref={(ref) => {
            this.step1 = ref;
          }}
          fetchUser={this._fetchUser}
          fetchRate={this._fetchRate}
          toggleAddAddress={this._toggleAddAddress}
          user={this.props.user}
          rate={this.props.rate}
          submitTransaction={this._submitTransaction}
          tabId="1"
        />
      </TabPane>
      <TabPane tabId="2">
        <Step2
          ref={(ref) => {
            this.step2 = ref;
          }}
          transaction={this.props.transaction}
          confirmTransaction={this._confirmTransaction}
        />
      </TabPane>
    </TabContent>
  );

  render() {
    const submit = this.state.activeTab === '1' ? 'Continue' : 'Confirm';
    return (
      <Modal isOpen={this.props.show} size="md" centered toggle={() => {}} className="buy-token">
        <ModalHeader toggle={this.toggle}>{this._renderTab()}</ModalHeader>
        <ModalBody>{this._renderContent()}</ModalBody>
        <ModalFooter>
          <Button
            className="button-cancel"
            upperCase
            onClick={() => {
              this.props.toggleBuyToken();
            }}
          >
            Cancel
          </Button>
          <Button className="button-light" upperCase onClick={() => this.submit()}>
            {submit}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
const mapStateToProps = state => ({
  ...state.transaction,
  user: state.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    toggleBuyToken,
    fetchRate,
    fetchUser,
    toggleAddAddress,
    submitTransaction,
    confirmTransaction,
  },
  dispatch);

export default connect(mapStateToProps,
  mapDispatchToProps)(BuyToken);
