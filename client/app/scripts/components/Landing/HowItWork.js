/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 1st April 2018 5:26:43 am
 * Last Modified: Tuesday, 12th June 2018 1:15:44 pm
 */
import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import ReactHtmlParser from 'react-html-parser';
import { Row, Col } from 'reactstrap';
import Swiper from 'react-id-swiper';

export default class HowItWork extends Component {
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
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    };
    const renderContent = () =>
      d.list.map((content, index) => (
        <Row key={uuidv1()}>
          <Col md={10} lg={6} className="how-image">
            <img src={content.image} alt="" />
          </Col>
          <Col md={10} lg={6} className="how-content">
            <div className="how-content-title">{content.title}</div>
            <div className="underline" />
            <div className="how-content-text">{ReactHtmlParser(content.content)}</div>
          </Col>
        </Row>
      ));
    if (d.show) {
      return (
        <div className="section howitwork text-center" id="howitwork">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-12 mx-auto">
                <h2 className="section-heading">{d.heading}</h2>
                <div className="contents">
                  <Swiper {...params}>{renderContent()}</Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}
