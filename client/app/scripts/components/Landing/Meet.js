/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 1st April 2018 4:19:51 am
 * Last Modified: Thursday, 26th April 2018 11:56:15 pm
 */
import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import ReactHtmlParser from 'react-html-parser';

export default class Meet extends Component {
  render() {
    const d = Object.assign({ show: false }, this.props.data);

    const renderContent = () =>
      d.list.map((content, index) => {
        if (index % 2) {
          return (
            <div className="row reserve" key={uuidv1()}>
              <div className="col-md-6 image">
                <img src={content.image} alt="" />
              </div>
              <div className="col-md-6 content">
                <div className="title">{content.title}</div>
                <div className="line" />
                <div className="text">{ReactHtmlParser(content.content)}</div>
              </div>
            </div>
          );
        }
        return (
          <div className="row" key={uuidv1()}>
            <div className="col-md-6 content">
              <div className="title">{content.title}</div>
              <div className="line" />
              <div className="text">{ReactHtmlParser(content.content)}</div>
            </div>
            <div className="col-md-6 image">
              <img src={content.image} alt="" />
            </div>
          </div>
        );
      });
    if (d.show) {
      return (
        <div className="meet text-center" id="meet">
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
