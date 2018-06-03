/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Thursday, 29th March 2018 5:40:31 pm
 * Last Modified: Saturday, 21st April 2018 12:01:56 pm
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import uuidv1 from 'uuid/v1';
import {
  Navigation,
  Intro,
  PreSale,
  HowFar,
  WhatIs,
  Meet,
  HowItWork,
  WhitePaper,
  RoadMap,
  Team,
  Business,
  Footer,
  Preloader,
  Contact,
  Subscribe,
  Error,
} from '../components';
import { fetchHome, sendSubscribe, showAlert } from '../actions';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount = () => {
    this.props.fetchHome();
  };

  componentDidMount = () => {};

  submitSubscribe = (data) => {
    this.props.sendSubscribe(data);
  };

  render() {
    if (_.isEmpty(this.props.home.data)) {
      if (this.props.home.fetching) {
        return <div />;
      }
      return <Error />;
    }

    const x = this.props.home.data;
    const sorted = () =>
      x.sorted.map((section) => {
        switch (section.section) {
          case 'header':
            return <Navigation isHome data={x.header} key={uuidv1()} />;
          case 'intro':
            return <Intro data={x.intro} key={uuidv1()} />;
          case 'presale':
            return <PreSale data={x.presale} key={uuidv1()} />;
          case 'howfar':
            return <HowFar data={x.howfar} key={uuidv1()} />;
          case 'whatis':
            return <WhatIs data={x.whatis} key={uuidv1()} />;
          case 'meet':
            return <Meet data={x.meet} key={uuidv1()} />;
          case 'howit':
            return <HowItWork data={x.howit} key={uuidv1()} />;
          case 'whitepaper':
            return <WhitePaper data={x.whitepaper} key={uuidv1()} />;
          case 'roadmap':
            return <RoadMap data={x.roadmap} key={uuidv1()} />;
          case 'team':
            return <Team dataTeam={x.team} dataAdvisors={x.advisors} key={uuidv1()} />;
          case 'business':
            return <Business dataTokens={x.tokens} dataBusiness={x.business} key={uuidv1()} />;
          case 'footer':
            return <Footer data={x.footer} key={uuidv1()} />;
          case 'contact':
            return <Contact data={x.contact} key={uuidv1()} />;
          case 'subscribe':
            return <Subscribe data={x.subscribe} onSubmit={this.submitSubscribe} key={uuidv1()} />;
          default:
            return <div key={uuidv1()} />;
        }
      });
    return <div className="home sections">{sorted()}</div>;
  }
}

const mapStateToProps = state => ({
  home: state.home,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchHome,
    sendSubscribe,
    showAlert,
  },
  dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
