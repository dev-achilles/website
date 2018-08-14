/*
 * File: table.js
 * Project: react-boilerplate
 * File Created: Tuesday, 14th August 2018 4:41:03 pm
 * Author: Navi Ocean (navi.ocean@outlook.com)
 * -----
 * Last Modified: Tuesday, 14th August 2018 5:27:24 pm
 * Modified By: Navi Ocean (navi.ocean@outlook.com>)
 * -----
 * Copyright <<projectCreationYear>> - 2018 Hawking LLC, Hawking LLC
 */
import React, { Component } from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';

export default class table extends Component {
  static propTypes = {
    data: PropTypes.instanceOf(Array).isRequired,
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    const renderRow = data.map((item, index) => (
      <tr key={index.toString()}>
        <td className="link-url">
          <a href={item.url}>{item.url}</a>
        </td>
        <td className="link-status">
          {item.status ? (
            <div className="link-success">
              <i className="fa fa-check" /> Verified
            </div>
          ) : (
            <div className="link-pending">
              <i className="fa fa-clock-o" /> Pending
            </div>
          )}
        </td>
      </tr>
    ));
    return (
      <div className="airdrop-table">
        <Table responsive>
          <thead>
            <tr>
              <th>Url</th>
              <th className="link-status">Status</th>
            </tr>
          </thead>
          <tbody>{renderRow}</tbody>
        </Table>
      </div>
    );
  }
}
