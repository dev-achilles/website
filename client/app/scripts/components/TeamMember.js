/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Friday, 8th June 2018 8:29:47 am
 * Last Modified: Friday, 8th June 2018 9:12:22 am
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class TeamMember extends Component {
  static propTypes = {
    member: PropTypes.instanceOf(Object).isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  showDesc = (e) => {
    e.preventDefault();
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    const { member } = this.props;
    return (
      <div className="col-md-6 col-lg-4 col-xl-3 inline-flex justify-content-center">
        <div className="member">
          <a href="/#" onClick={this.showDesc} alt="">
            <div className="avatar">
              <img src={member.avatar} alt="team" />
            </div>
          </a>

          <div className="info">
            <h5 className="name">{member.name}</h5>
            <p className="position">{member.position}</p>
            <ul className="social">
              {!_.isEmpty(member.profile.facebook) ? (
                <li>
                  <a href={member.profile.facebook} alt="facebook">
                    <i className="fa fa-facebook-square" />
                  </a>
                </li>
              ) : null}
              {!_.isEmpty(member.profile.linkedin) ? (
                <li>
                  <a href={member.profile.linkedin} alt="linkedin">
                    <i className="fa fa-linkedin-square" />
                  </a>
                </li>
              ) : null}
              {!_.isEmpty(member.profile.twitter) ? (
                <li>
                  <a href={member.profile.twitter} alt="twitter">
                    <i className="fa fa-twitter-square" />
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
          {this.state.show ? (
            <div className="description">
              <div className="description-content">{member.description}</div>
              <div className="close-member">
                <a href="/#" onClick={this.showDesc}>
                  <i className="fa fa-times" />
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default TeamMember;
