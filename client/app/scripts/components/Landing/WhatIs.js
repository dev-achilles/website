/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Saturday, 31st March 2018 12:29:02 pm
 * Last Modified: Sunday, 3rd June 2018 3:07:31 pm
 */
import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

export default class WhatIs extends Component {
  render() {
    const d = Object.assign({ show: false }, this.props.data);

    if (d.show) {
      return (
        <div className="whatis text-center" id="whatis">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-12 mx-auto">
                <h2 className="section-heading">{ReactHtmlParser(d.heading)}</h2>
                <h3>{d.sub}</h3>
                <div className="impress">
                  <img src={require('../../../assets/images/arrow1@2x.png')} alt="" />
                  <p className="text">{d.impress}</p>
                  <img src={require('../../../assets/images/arrow2@2x.png')} alt="" />
                </div>
                <p className="content">{ReactHtmlParser(d.content)}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}
