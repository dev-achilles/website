/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 1st April 2018 6:16:24 am
 * Last Modified: Friday, 8th June 2018 12:40:42 pm
 */
import React, { Component } from 'react';
import { join } from 'redux-saga/effects';
import uuidv1 from 'uuid/v1';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import _ from 'lodash';

export default class RoadMap extends Component {
  render() {
    const d = Object.assign({ show: false }, this.props.data);

    const renderRoadmap = () =>
      d.list.map((roadmap, index) => {
        const classmap = ['timeline'];
        if (roadmap.done) classmap.push('done');
        return (
          <div className={classmap.join(' ')} key={uuidv1()}>
            <div className="timeline-icon" />
            <div className="timeline-content">
              <span className="date">{moment(roadmap.time).format('MMM YYYY')}</span>
              <p className="description">{ReactHtmlParser(roadmap.content)}</p>
            </div>
          </div>
        );
      });
    if (d.show) {
      return (
        <div className="section roadmap text-center" id="roadmap">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-8 mx-auto">
                <h2 className="section-heading">{d.heading}</h2>
                <p>{d.sub}</p>
              </div>
            </div>
            <div className="row">
              <div className="main-timeline">{renderRoadmap()}</div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}
