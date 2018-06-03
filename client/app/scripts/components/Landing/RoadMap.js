/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 1st April 2018 6:16:24 am
 * Last Modified: Thursday, 26th April 2018 11:55:47 pm
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
        let classmap = ['single-roadmap', 'roadmap-sm'];
        if (index % 2) classmap = ['single-roadmap', 'roadmap-sm', 'roadmap-down'];
        if (roadmap.done) classmap.push('roadmap-done');
        return (
          <div className={classmap.join(' ')} key={uuidv1()}>
            <h6>{moment(roadmap.time).format('MMM YYYY')}</h6>
            <p>{ReactHtmlParser(roadmap.content)}</p>
          </div>
        );
      });
    if (d.show) {
      return (
        <div className="roadmap text-center" id="roadmap">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-8 mx-auto">
                <h2 className="section-heading">{d.heading}</h2>
                <p>{d.sub}</p>
              </div>
            </div>
            <div className="row roadmap-list">{renderRoadmap()}</div>
          </div>
        </div>
      );
    }
    return null;
  }
}
