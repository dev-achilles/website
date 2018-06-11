/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 1st April 2018 4:19:51 am
 * Last Modified: Sunday, 10th June 2018 8:42:51 am
 */
import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import ReactHtmlParser from 'react-html-parser';
import { Row, Col } from 'reactstrap';
import Swiper from 'react-id-swiper';

export default class Meet extends Component {
  render() {
    const d = Object.assign({ show: false }, this.props.data);

    const params = {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    };

    const renderContent = () =>
      d.list.map((content, index) => {
        if (index % 2) {
          return (
            <Row className="reserve" key={uuidv1()}>
              <Col md={10} lg={6} className="meet-image">
                <img src={content.image} alt="" />
              </Col>
              <Col md={10} lg={6} className="meet-content">
                <div className="meet-content-title">{content.title}</div>
                <div className="underline" />
                <div className="meet-content-text">{ReactHtmlParser(content.content)}</div>
              </Col>
            </Row>
          );
        }
        return (
          <Row key={uuidv1()}>
            <Col md={10} lg={6} className="meet-content">
              <div className="meet-content-title">{content.title}</div>
              <div className="underline" />
              <div className="meet-content-text">{ReactHtmlParser(content.content)}</div>
            </Col>
            <Col md={10} lg={6} className="meet-image">
              <img src={content.image} alt="" />
            </Col>
          </Row>
        );
      });
    if (d.show) {
      return (
        <div className="section meet text-center" id="meet">
          <div className="container">
            <Row className="justify-content-center align-items-center">
              <Col md={12} className="mx-auto">
                <h2 className="section-heading">{d.heading}</h2>
                <div className="contents">
                  <Swiper {...params}>{renderContent()}</Swiper>
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
