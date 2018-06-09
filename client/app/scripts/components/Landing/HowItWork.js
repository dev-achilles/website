/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 1st April 2018 5:26:43 am
 * Last Modified: Friday, 8th June 2018 6:41:52 am
 */
import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import ReactHtmlParser from 'react-html-parser';

export default class HowItWork extends Component {
  n = n => (n > 9 ? `${n}` : `0${n}`);
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
                <div className="position">
                  <img src={d.image} alt="" />
                  <div className="number">{this.n(index + 1)}</div>
                </div>
                <div className="title">{content.title}</div>
                <div className="text">{ReactHtmlParser(content.content)}</div>
              </div>
            </div>
          );
        }
        return (
          <div className="row" key={uuidv1()}>
            <div className="col-md-6 content">
              <div className="position">
                <img src={d.image} alt="" />
                <div className="number">{this.n(index + 1)}</div>
              </div>
              <div className="title">{content.title}</div>
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
