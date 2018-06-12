/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Friday, 8th June 2018 8:29:47 am
 * Last Modified: Tuesday, 12th June 2018 1:38:09 pm
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class AdvisorMember extends Component {
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
    /* eslint-disable */
    return (
      <div className="col-sm-12 col-md-8 col-lg-6 inline-flex justify-content-center">
        <div className="advisor" onClick={this.showDesc}>
          <div className="avatar">
            <img src={member.avatar} alt="team" />
          </div>

          <div className="info">
            <div className="wrap-name">
              <h5 className="name">{member.name}</h5>
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
            <p className="position">{member.position}</p>
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

export default AdvisorMember;
