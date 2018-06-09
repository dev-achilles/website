/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Saturday, 31st March 2018 10:45:25 am
 * Last Modified: Friday, 8th June 2018 6:41:45 am
 */
import React, { Component } from 'react';
import { Button, Progress } from 'reactstrap';

export default class HowFar extends Component {
  render() {
    const d = Object.assign({ show: false }, this.props.data);

    if (d.show) {
      return (
        <div className="section howfar text-center" id="howfar">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-10 mx-auto">
                <h2 className="section-heading">{d.heading}</h2>
                <h3>{d.sub}</h3>
                <p>{d.text}</p>
                <div className="here" style={{ width: `${d.percent}%` }}>
                  <p>{d.here}</p>
                  <p>|</p>
                </div>
                <div className="progress">
                  <Progress bar value={d.percent} className="done" />
                  <div className="percent">{d.percent}%</div>
                </div>
                <div className="fromto">
                  <div className="from">
                    <p>|</p>
                    <p>{d.from}</p>
                  </div>
                  <div className="to">
                    <p>|</p>
                    <p>{d.to}</p>
                  </div>
                </div>
                {d.button.show ? (
                  <a href={d.button.link} className="join btn btn-secondary">
                    {d.button.text}
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}
