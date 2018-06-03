/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 20th May 2018 10:12:03 am
 * Last Modified: Thursday, 31st May 2018 2:08:44 pm
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

export class SEO extends Component {
  static propTypes = {};

  render() {
    return (
      <Helmet defer={false}>
        <meta charSet="utf-8" />
        {this.props.seo.title ? <title>{this.props.seo.title}</title> : null}
        {this.props.seo.desc ? <meta name="description" content="A page's description" /> : null}
        {this.props.seo.og.title ? (
          <meta property="og:title" content={this.props.seo.og.title} />
        ) : null}
        {this.props.seo.og.desc ? (
          <meta property="og:description" content={this.props.seo.og.desc} />
        ) : null}
        {this.props.seo.og.type ? (
          <meta property="og:type" content={this.props.seo.og.type} />
        ) : null}
        {this.props.seo.og.url ? <meta property="og:url" content={this.props.seo.og.url} /> : null}
        {this.props.seo.og.image ? (
          <meta property="og:image" content={this.props.seo.og.image} />
        ) : null}
      </Helmet>
    );
  }
}
const mapStateToProps = state => ({
  seo: state.seo,
});
export default connect(mapStateToProps)(SEO);
