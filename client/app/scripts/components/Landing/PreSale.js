/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Saturday, 31st March 2018 12:51:53 am
 * Last Modified: Saturday, 16th June 2018 4:27:57 pm
 */
import React, { Component } from 'react';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import Button from '../Button';
import CountDown from './CountDown';

class PreSale extends Component {
  render() {
    const d = Object.assign({ show: false }, this.props.data);

    if (d.show) {
      return (
        <div className="section presale text-center" id="presale">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6 mx-auto">
                <h2 className="section-heading">{d.heading}</h2>
                <div className="section-sub">{ReactHtmlParser(d.sub)}</div>
                <CountDown date={moment(d.endTime).format('MM/DD/YYYY')} />
                {d.button.show ? (
                  <a href={d.button.link}>
                    <Button className="button-light" upperCase iconRight="long-arrow-right">
                      {d.button.text}
                    </Button>
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
