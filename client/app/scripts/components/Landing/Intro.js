/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Friday, 30th March 2018 11:43:55 pm
 * Last Modified: Wednesday, 2nd May 2018 2:33:06 pm
 */
import React, { Component } from 'react';
import YouTube from 'react-youtube';
import Particles from 'react-particles-js';
import uuidv1 from 'uuid/v1';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      youtube: {
        height: '100%',
        width: '100%',
        playerVars: {
          autoplay: this.props.data.video.autoplay,
        },
      },
    };
  }
  onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  render() {
    const d = Object.assign({ show: false }, this.props.data);
    if (d.show) {
      return (
        <div className="introduction" id="introduction">
          <Particles
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
          />
          <div className="container h-100">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <div className="intro">{d.intro}</div>
                {d.video.show ? (
                  <div className="video">
                    <YouTube
                      videoId={d.video.url}
                      opts={this.state.youtube}
                      onReady={this.onReady}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default Intro;
