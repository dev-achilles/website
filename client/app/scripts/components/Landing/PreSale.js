/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Saturday, 31st March 2018 12:51:53 am
 * Last Modified: Thursday, 12th April 2018 3:29:04 pm
 */
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import moment from 'moment';

import CountDown from './CountDown';

class PreSale extends Component {
  render() {
    const d = Object.assign({ show: false }, this.props.data);

    if (d.show) {
      return (
        <div className="presale text-center" id="presale">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-8 mx-auto">
                <h2 className="section-heading">{d.heading}</h2>
                <h3>{d.sub}</h3>
                <CountDown date={moment(d.endTime).format('MM/DD/YYYY')} />
                {d.button.show ? (
                  <a className="join btn btn-secondary" href={d.button.link}>
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

export default PreSale;
