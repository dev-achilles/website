/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Thursday, 21st June 2018 7:50:30 am
 * Last Modified: Thursday, 21st June 2018 2:06:06 pm
 */
import React, { Component } from 'react';
import { Col } from 'reactstrap';
import PropTypes from 'prop-types';

class Summary extends Component {
  static propTypes = {
    item: PropTypes.instanceOf(Object).isRequired,
  };
  render() {
    const { item } = this.props;
    return (
      <Col sm={6} md={6} lg={6} xl={3} className="wrap-summary-item display-flex">
        <div className={`summary-item ${item.type} justify-content-center align-items-center"`}>
          <h5>{item.headline}</h5>
          <p>{item.description}</p>
        </div>
      </Col>
    );
  }
}

export default Summary;
