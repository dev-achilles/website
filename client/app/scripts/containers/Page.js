/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Saturday, 14th April 2018 12:48:26 pm
 * Last Modified: Wednesday, 20th June 2018 6:13:33 am
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import ReactHtmlParser from 'react-html-parser';
import _ from 'lodash';
import { fetchPage } from '../actions';
import { Navigation, Error } from '../components';

class Page extends Component {
  constructor(props) {
    super(props);
    this.slug = this.props.match.params.slug;
  }

  componentWillMount = () => {
    this.props.fetchPage(this.slug);
  };

  render() {
    if (_.isEmpty(this.props.items)) {
      if (this.props.fetching) {
        return <div />;
      }
      return <Error />;
    }

    const page = _.find(this.props.items, { slug: this.slug });

    return (
      <div className="page" id="page-common">
        <Navigation isHome />
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto align-items-center justify-content-center">
              <h2 className="section-heading">{page.title}</h2>
              <div className="content">{ReactHtmlParser(page.content)}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.page,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchPage,
  },
  dispatch);

export default connect(mapStateToProps,
  mapDispatchToProps)(Page);
