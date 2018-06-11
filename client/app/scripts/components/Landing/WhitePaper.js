/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 1st April 2018 6:07:42 am
 * Last Modified: Sunday, 10th June 2018 9:00:35 am
 */
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import _ from 'lodash';
import Button from '../Button';

export default class WhitePaper extends Component {
  render() {
    const d = Object.assign({ show: false }, this.props.data);

    if (d.show) {
      return (
        <div className="section whitepaper text-center" id="whitepaper">
          <div className="container">
            <Row className="justify-content-center align-items-center">
              <Col md={12} className="mx-auto">
                <h2 className="section-heading">{d.heading}</h2>
                <div className="whitepaper-body">
                  <div className="whitepaper-info">
                    <div className="underline" />
                    <p>{d.sub}</p>
                    {d.button.show ? (
                      <Button
                        className="button-light"
                        upperCase
                        iconRight="long-arrow-right"
                        href={d.button.link}
                      >
                        {d.button.text}
                      </Button>
                    ) : null}
                  </div>
                  <div className="whitepaper-image">
                    <img src={require('../../../assets/images/whitepaper-icon.png')} alt="" />
                  </div>
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
