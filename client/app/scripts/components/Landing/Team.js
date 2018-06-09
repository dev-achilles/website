/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 1st April 2018 8:54:06 am
 * Last Modified: Friday, 8th June 2018 9:41:27 am
 */
import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import _ from 'lodash';
import TeamMember from '../TeamMember';
import AdvisorMember from '../AdvisorMember';

export default class Team extends Component {
  render() {
    const t = Object.assign({ show: false }, this.props.dataTeam);
    const a = Object.assign({ show: false }, this.props.dataAdvisors);
    const renderMebmers = () => t.list.map(member => <TeamMember key={uuidv1()} member={member} />);
    const renderTeam = () => {
      if (t.list.length > 0 && t.show) {
        return (
          <div className="team-members">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-8 mx-auto">
                <h2 className="section-heading">{t.heading}</h2>
                <p>{t.sub}</p>
              </div>
            </div>
            <div className="row justify-content-center align-items-start members">
              {renderMebmers()}
            </div>
          </div>
        );
      }
      return null;
    };
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
    if (a.show || t.show) {
      return (
        <div className="section team text-center" id="team">
          <div className="container">
            {renderTeam()}
            {renderAdvisors()}
          </div>
        </div>
      );
    }
    return null;
  }
}
