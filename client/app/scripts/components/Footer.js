/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Tuesday, 10th April 2018 4:08:33 pm
 * Last Modified: Saturday, 21st April 2018 7:46:43 am
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uuidv1 from 'uuid/v1';
import _ from 'lodash';
import { push } from 'react-router-redux';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  onChangeRoute = (e, url) => {
    e.preventDefault();
    this.props.changeRoute(url);
  };
  render() {
    if (_.isEmpty(this.props.data)) return null;
    const { data } = this.props;
    const renderSocial = () =>
      data.social.map((item) => {
        if (item.url) {
          return (
            <a
              href={item.url}
              alt={item.title}
              key={uuidv1()}
              className="btn-icon"
              onClick={e => this.onChangeRoute(e, item.url)}
            >
              <i className={`fa ${item.icon}`} />
            </a>
          );
        }
        return null;
      });
    const renderLink = () =>
      data.links.map(info => (
        <li key={uuidv1()}>
          <a href={info.url} onClick={e => this.onChangeRoute(e, info.url)}>
            {info.title}
          </a>
        </li>
      ));
    return (
      <div className="footer" id="footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xs-12">
              <div className="social-area">{renderSocial()}</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="copyright">
            <div className="pull-left">Copyright © 2018 Hawking.network</div>
            <div className="links pull-right">
              <ul>{renderLink()}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  changeRoute: url => dispatch(push(url)),
  dispatch,
});
export default connect(null, mapDispatchToProps)(Footer);
