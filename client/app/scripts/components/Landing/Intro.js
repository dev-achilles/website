/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Friday, 30th March 2018 11:43:55 pm
 * Last Modified: Sunday, 10th June 2018 8:43:03 am
 */
import React, { Component } from 'react';
import YouTube from 'react-youtube';
import uuidv1 from 'uuid/v1';
import { Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';

class Intro extends Component {
  constructor(props) {
    super(props);
  }
  onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  render() {
    const d = Object.assign({ show: false }, this.props.data);
    if (d.show) {
      return (
        <div className="section introduction text-center" id="introduction">
          <div className="container h-100">
            <Row className="justify-content-center align-items-center">
              <Col md={12} className="mx-auto">
                <p className="sub-heading">What is</p>
                <h2 className="section-heading">Hawking</h2>
                <div className="contents">
                  <Row>
                    <Col md={10} lg={6} className="intro-image">
                      <img src={require('../../../assets/images/intro.png')} alt="" />
                    </Col>
                    <Col md={10} lg={6} className="intro-content">
                      <div className="underline" />
                      <div className="intro-content-text">{ReactHtmlParser(d.intro)}</div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default Intro;
