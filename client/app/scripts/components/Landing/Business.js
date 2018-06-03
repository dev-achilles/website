/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 1st April 2018 8:54:16 am
 * Last Modified: Thursday, 12th April 2018 3:29:30 pm
 */
import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import _ from 'lodash';

export default class Business extends Component {
  render() {
    const t = Object.assign({ show: false }, this.props.dataTokens);
    const b = Object.assign({ show: false }, this.props.dataBusiness);
    const renderToken = () =>
      t.list.map(token => (
        <div className="col-md-3 item" key={uuidv1()}>
          <a href={token.url} alt={token.title}>
            <img src={token.image} alt={token.title} title={token.title} />
          </a>
        </div>
      ));
    const renderSectionToken = () => {
      if (t.show && t.list.length > 0) {
        return (
          <div className="section-token">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-12 mx-auto">
                <h2 className="section-heading">{t.heading}</h2>
              </div>
            </div>
            <div className="row bs-items justify-content-center align-items-center">
              {renderToken()}
            </div>
          </div>
        );
      }
      return null;
    };

    const renderBussines = () =>
      b.list.map(business => (
        <div className="col-md-3 item" key={uuidv1()}>
          <a href={business.url} alt={business.title}>
            <img src={business.image} alt={business.title} title={business.title} />
          </a>
        </div>
      ));
    const renderSectionBusiness = () => {
      if (b.show && b.list.length > 0) {
        return (
          <div className="section-business">
            <div className="row">
              <div className="col-md-12 mx-auto">
                <h2 className="section-heading">{b.heading}</h2>
              </div>
            </div>
            <div className="row bs-items">{renderBussines()}</div>
          </div>
        );
      }
      return null;
    };

    if (b.show || t.show) {
      return (
        <div className="business text-center" id="business">
          <div className="container">
            {renderSectionBusiness()}
            {renderSectionToken()}
          </div>
        </div>
      );
    }
    return null;
  }
}
