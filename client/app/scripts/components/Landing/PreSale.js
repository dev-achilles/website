/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Saturday, 31st March 2018 12:51:53 am
 * Last Modified: Sunday, 1st July 2018 1:41:15 am
 */
import React, { Component, Fragment } from 'react';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import { Row, Col } from 'reactstrap';
import Button from '../Button';
import CountDown from './CountDown';

class PreSale extends Component {
  _renderRate = () => {
    const { data } = this.props;
    const rates = data.cryptos.map((c) => {
      const hwk = (1 / c.rate).toFixed(2);
      return (
        <div className="item-rate">
          1 {c.code} = {hwk} HWK
        </div>
      );
    });

    if (rates) return <div className="section-rate">{rates}</div>;
    return null;
  };

  _renderBonus = () => {
    const { data } = this.props;
    const bonus = data.bonus.map(b => (
      <div className="bonus-item">
        <div className="bonus-percent">+{b.percent}% Bonus</div>
        <div className="bonus-time">
          {moment(b.startTime).format('DD MMM YYYY')} - {moment(b.endTime).format('DD MMM YYYY')}
        </div>
      </div>
    ));
    if (bonus) return <div className="section-bonus">{bonus}</div>;
    return null;
  };

  _renderStatus = () => {
    const { data } = this.props;
    const timeNow = moment();
    const startTime = moment(data.startTime);
    const endTime = moment(data.endTime);
    if (timeNow.isBefore(startTime)) {
      return <h3 className="section-status">Start in {startTime.format('MMMM Do YYYY')}</h3>;
    }
    if (timeNow.isBetween(
      startTime, endTime, '[]',
    )) {
      return <h3 className="section-status">End in {endTime.format('MMMM Do YYYY')}</h3>;
    }
    return null;
  };

  render() {
    const d = Object.assign({ show: false }, this.props.data);
    const timeNow = moment();
    const startTime = moment(d.startTime);
    const endTime = moment(d.endTime);

    const countTime = timeNow.isBefore(startTime) ? startTime : endTime;
    let status = 'Will Live Soon';
    if (timeNow.isBetween(
      startTime, endTime, '[]',
    )) status = 'Is Now LIVE';
    if (timeNow.isAfter(endTime)) status = 'Is Ended';
    if (d.show) {
      return (
        <div className="section presale text-center" id="presale">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-12 mx-auto">
                <h2 className="section-heading">
                  {d.heading} {status}
                </h2>
                <div className="section-sub">{ReactHtmlParser(d.sub)}</div>
                {this._renderStatus()}
                <CountDown date={countTime.format('MM/DD/YYYY')} />
                {this._renderRate()}
                {this._renderBonus()}
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
