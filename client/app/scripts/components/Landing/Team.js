/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 1st April 2018 8:54:06 am
 * Last Modified: Saturday, 21st April 2018 12:57:44 pm
 */
import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import _ from 'lodash';

export default class Team extends Component {
  render() {
    const t = Object.assign({ show: false }, this.props.dataTeam);
    const a = Object.assign({ show: false }, this.props.dataAdvisors);
    const renderMebmers = () =>
      t.list.map(member => (
        <div
          className="col-md-6 col-lg-4 col-xl-3 inline-flex justify-content-center"
          key={uuidv1()}
        >
          <div className="member">
            <div className="avatar">
              <img src={member.avatar} alt="team" />
            </div>
            <div className="info">
              <h5 className="name">{member.name}</h5>
              <span className="position">{member.position}</span>
              <ul className="social">
                {!_.isEmpty(member.profile.facebook) ? (
                  <li>
                    <a href={member.profile.facebook} alt="facebook">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                ) : null}
                {!_.isEmpty(member.profile.linkedin) ? (
                  <li>
                    <a href={member.profile.linkedin} alt="linkedin">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                ) : null}
                {!_.isEmpty(member.profile.twitter) ? (
                  <li>
                    <a href={member.profile.twitter} alt="twitter">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                ) : null}
              </ul>
              {!_.isEmpty(member.description) ? (
                <p className="description">{member.description}</p>
              ) : null}
            </div>
          </div>
        </div>
      ));
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
      a.list.map(advisor => (
        <div className="col-lg-4 col-md-6 inline-flex justify-content-center" key={uuidv1()}>
          <div className="member">
            <div className="avatar">
              <img src={advisor.avatar} alt="team" />
            </div>
            <div className="info">
              <h5 className="name">{advisor.name}</h5>
              <span className="position">{advisor.position}</span>
              <ul className="social">
                {!_.isEmpty(advisor.profile.facebook) ? (
                  <li>
                    <a href={advisor.profile.facebook} alt="facebook">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                ) : null}
                {!_.isEmpty(advisor.profile.linkedin) ? (
                  <li>
                    <a href={advisor.profile.linkedin} alt="linkedin">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                ) : null}
                {!_.isEmpty(advisor.profile.twitter) ? (
                  <li>
                    <a href={advisor.profile.twitter} alt="twitter">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                ) : null}
              </ul>
              {!_.isEmpty(advisor.description) ? (
                <p className="description">{advisor.description}</p>
              ) : null}
            </div>
          </div>
        </div>
      ));
    const renderAdvisors = () => {
      if (a.list.length > 0 && a.show) {
        return (
          <div className="advisors">
            <div className="separate" />
            <div className="row">
              <div className="col-md-8 mx-auto">
                <h2 className="section-heading">{a.heading}</h2>
                <p>{a.sub}</p>
              </div>
            </div>
            <div className="row members">{renderAdvisor()}</div>
          </div>
        );
      }
      return null;
    };
    if (a.show || t.show) {
      return (
        <div className="team text-center" id="team">
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
