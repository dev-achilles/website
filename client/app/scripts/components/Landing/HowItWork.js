/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 1st April 2018 5:26:43 am
 * Last Modified: Saturday, 16th June 2018 4:00:23 pm
 */
import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import ReactHtmlParser from 'react-html-parser';
import { Row, Col } from 'reactstrap';

export default class HowItWork extends Component {
  render() {
    const d = Object.assign({ show: false }, this.props.data);
    const renderContent = () =>
      d.list.map((content, index) => {
        if (index % 2) {
          return (
            <Row className="reserve" key={uuidv1()}>
              <Col md={10} lg={6} className="how-image">
                <img src={content.image} alt="" />
              </Col>
              <Col md={10} lg={6} className="how-content">
                <div className="how-content-title">{content.title}</div>
                <div className="underline" />
                <div className="how-content-text">{ReactHtmlParser(content.content)}</div>
              </Col>
            </Row>
          );
        }
        return (
          <Row key={uuidv1()}>
            <Col md={10} lg={6} className="how-content">
              <div className="how-content-title">{content.title}</div>
              <div className="underline" />
              <div className="how-content-text">{ReactHtmlParser(content.content)}</div>
            </Col>
            <Col md={10} lg={6} className="how-image">
              <img src={content.image} alt="" />
            </Col>
          </Row>
        );
      });

    if (d.show) {
      return (
        <div className="section howitwork text-center" id="howitwork">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-12 mx-auto">
                <h2 className="section-heading">{d.heading}</h2>
                <div className="contents">{renderContent()}</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}
