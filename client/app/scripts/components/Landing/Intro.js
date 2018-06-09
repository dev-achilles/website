/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Friday, 30th March 2018 11:43:55 pm
 * Last Modified: Friday, 8th June 2018 6:50:07 am
 */
import React, { Component } from 'react';
import YouTube from 'react-youtube';

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
        <div className="section introduction" id="introduction">
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
