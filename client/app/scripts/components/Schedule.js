/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Thursday, 21st June 2018 8:48:07 am
 * Last Modified: Monday, 25th June 2018 12:42:09 am
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import moment from 'moment';
import Button from './Button';

class Schedule extends Component {
  static propTypes = {
    item: PropTypes.instanceOf(Object).isRequired,
  };
  _onBuyToken = () => {
    this.props.onBuyToken();
  };
  render() {
    const { item } = this.props;

    let status = 'opening';
    switch (item.status) {
      case -1:
        status = 'closed';
        break;
      case 0:
        status = 'queued';
        break;
      case 1:
        status = 'opening';
        break;
      default:
        status = 'queued';
    }
    return (
      <div className="schedule-item">
        <div className="schedule-item-header">
          <div className="schedule-item-header-left">
            <h6>{item.title}</h6>
            <div className="dot" />
            <div className={`schedule-status ${status}`}>{status}</div>
          </div>
          <div className="schedule-item-header-right">
            {status === 'opening' ? (
              <Button
                className="button-light"
                upperCase
                iconRight="plus"
                onClick={this._onBuyToken}
              >
                Buy Token
              </Button>
            ) : null}
          </div>
        </div>
        <div className="schedule-body">
          <Table responsive>
            <thead>
              <tr>
                <th>Begin</th>
                <th>End</th>
                <th>Price</th>
                <th>Total HWK</th>
                <th>Available HWK</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{moment(item.startTime).format('DD MMM, YYYY')}</td>
                <td>{moment(item.endTime).format('DD MMM, YYYY')}</td>
                <td>$ {item.price}</td>
                <td>{item.total.toLocaleString()} HWK</td>
                <td>{item.available} HWK</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Schedule;
