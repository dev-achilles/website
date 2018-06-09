/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Thursday, 29th March 2018 5:40:31 pm
 * Last Modified: Friday, 8th June 2018 1:17:36 pm
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import Particles from 'react-particles-js';
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
          // case 'intro':
          //   return <Intro data={x.intro} key={uuidv1()} />;
          // case 'presale':
          //   return <PreSale data={x.presale} key={uuidv1()} />;
          // case 'howfar':
          //   return <HowFar data={x.howfar} key={uuidv1()} />;
          // case 'whatis':
          //   return <WhatIs data={x.whatis} key={uuidv1()} />;
          case 'meet':
            return <Meet data={x.meet} key={uuidv1()} />;
          // case 'howit':
          //   return <HowItWork data={x.howit} key={uuidv1()} />;
          // case 'whitepaper':
          // return <WhitePaper data={x.whitepaper} key={uuidv1()} />;
          case 'roadmap':
            return <RoadMap data={x.roadmap} key={uuidv1()} />;
          case 'team':
            return <Team dataTeam={x.team} dataAdvisors={x.advisors} key={uuidv1()} />;
          // case 'business':
          //   return <Business dataTokens={x.tokens} dataBusiness={x.business} key={uuidv1()} />;
          // case 'footer':
          //   return <Footer data={x.footer} key={uuidv1()} />;
          // case 'contact':
          //   return <Contact data={x.contact} key={uuidv1()} />;
          case 'subscribe':
            return <Subscribe data={x.subscribe} onSubmit={this.submitSubscribe} key={uuidv1()} />;
          default:
            return <div key={uuidv1()} />;
        }
      });
    return (
      <div className="home sections">
        {/* <Particles
          key={uuidv1()}
          className="particles-container"
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: !0,
                  value_area: 800,
                },
              },
              color: {
                value: '#fff100',
              },
              shape: {
                type: 'circle',
                opacity: 0.2,
                stroke: {
                  width: 0,
                  color: '#ffc400',
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: 'img/github.svg',
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.3,
                random: !1,
                anim: {
                  enable: !1,
                  speed: 1,
                  opacity_min: 0.12,
                  sync: !1,
                },
              },
              size: {
                value: 6,
                random: !0,
                anim: {
                  enable: !1,
                  speed: 40,
                  size_min: 0.08,
                  sync: !1,
                },
              },
              line_linked: {
                enable: !0,
                distance: 150,
                color: '#ffc400',
                opacity: 0.3,
                width: 1.3,
              },
              move: {
                enable: !0,
                speed: 6,
                direction: 'none',
                random: !1,
                straight: !1,
                out_mode: 'out',
                bounce: !1,
                attract: {
                  enable: !1,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: !0,
                  mode: 'repulse',
                },
                onclick: {
                  enable: !0,
                  mode: 'push',
                },
                resize: !0,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: !0,
          }}
        /> */}
        {sorted()}
      </div>
    );
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
export default connect(mapStateToProps,
  mapDispatchToProps)(Home);
