/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Thursday, 29th March 2018 5:40:31 pm
 * Last Modified: Tuesday, 12th June 2018 1:28:11 pm
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import Particles from 'react-particles-js';
import uuidv1 from 'uuid/v1';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
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
  Advisor,
  Business,
  Footer,
  Preloader,
  Contact,
  Subscribe,
  Error,
  NavSections,
} from '../components';
import { fetchHome, sendSubscribe, showAlert } from '../actions';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount = () => {
    this.props.fetchHome();
  };

  componentDidMount = () => {
    Events.scrollEvent.register('begin', (to, element) => {
      console.log(
        'begin', to, element,
      );
    });

    Events.scrollEvent.register('end', (to, element) => {
      console.log(
        'end', to, element,
      );
    });

    scrollSpy.update();
  };

  componentWillUnmount = () => {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  };

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
            return (
              <Element name={section.section} key={uuidv1()}>
                <Intro data={x.intro} />
              </Element>
            );
          case 'presale':
            return (
              <Element name={section.section} key={uuidv1()}>
                <PreSale data={x.presale} />
              </Element>
            );
          // case 'howfar':
          //   return <HowFar data={x.howfar} key={uuidv1()} />;
          // case 'whatis':
          //   return <WhatIs data={x.whatis} key={uuidv1()} />;
          case 'meet':
            return (
              <Element name={section.section} key={uuidv1()}>
                <Meet data={x.meet} />
              </Element>
            );
          case 'howit':
            return (
              <Element name={section.section} key={uuidv1()}>
                <HowItWork data={x.howit} />
              </Element>
            );
          case 'whitepaper':
            return (
              <Element name={section.section} key={uuidv1()}>
                <WhitePaper data={x.whitepaper} />
              </Element>
            );
          case 'roadmap':
            return (
              <Element name={section.section} key={uuidv1()}>
                <RoadMap data={x.roadmap} />
              </Element>
            );
          case 'team':
            return (
              <Element name={section.section} key={uuidv1()}>
                <Team dataTeam={x.team} />
              </Element>
            );
          case 'advisor':
            return (
              <Element name={section.section} key={uuidv1()}>
                <Advisor dataAdvisors={x.advisors} />
              </Element>
            );
          // case 'business':
          //   return <Business dataTokens={x.tokens} dataBusiness={x.business} key={uuidv1()} />;
          case 'footer':
            return (
              <Element name={section.section} key={uuidv1()}>
                <Footer data={x.footer} />
              </Element>
            );
          // case 'contact':
          // return <Contact data={x.contact} key={uuidv1()} />;
          // case 'subscribe':
          // return <Subscribe data={x.subscribe} onSubmit={this.submitSubscribe} key={uuidv1()} />;
          default:
            return null;
        }
      });

    return (
      <div className="home sections">
        <Particles
          key={uuidv1()}
          className="particles-container"
          params={{
            particles: {
              number: {
                value: 20,
                density: {
                  enable: !0,
                  value_area: 1000,
                },
              },
              color: {
                value: '#1da1f2',
              },
              shape: {
                type: 'circle',
                opacity: 0.2,
                stroke: {
                  width: 0,
                  color: '#3d60a6',
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
                color: '#3d60a6',
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
        />
        <NavSections />
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
