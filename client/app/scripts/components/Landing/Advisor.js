/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 1st April 2018 8:54:06 am
 * Last Modified: Sunday, 10th June 2018 10:21:48 pm
 */
import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import _ from 'lodash';
import AdvisorMember from '../AdvisorMember';

export default class Advisor extends Component {
  render() {
    const a = Object.assign({ show: false }, this.props.dataAdvisors);
    const renderAdvisor = () =>
      a.list.map(advisor => <AdvisorMember key={uuidv1()} member={advisor} />);
    const renderAdvisors = () => {
      if (a.list.length > 0 && a.show) {
        return (
          <div className="advisors">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <h2 className="section-heading">{a.heading}</h2>
                <p>{a.sub}</p>
              </div>
            </div>
            <div className="row members justify-content-center align-items-start">
              {renderAdvisor()}
            </div>
          </div>
        );
      }
      return null;
    };
    if (a.show) {
      return (
        <div className="section team text-center" id="advisor">
          <div className="container">{renderAdvisors()}</div>
        </div>
      );
    }
    return null;
  }
}
