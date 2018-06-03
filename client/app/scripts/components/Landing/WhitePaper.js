/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 1st April 2018 6:07:42 am
 * Last Modified: Sunday, 20th May 2018 10:29:52 am
 */
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import _ from 'lodash';

export default class WhitePaper extends Component {
  render() {
    const d = Object.assign({ show: false }, this.props.data);

    if (d.show) {
      return (
        <div className="whitepaper text-center" id="whitepaper">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-10 mx-auto">
                <h2 className="section-heading">{d.heading}</h2>
                <h3>{d.sub}</h3>
                {d.button.show ? (
                  <a href={d.button.link} className="join download btn btn-secondary">
                    {d.button.text}
                  </a>
                ) : null}
                <p>{d.text}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}
