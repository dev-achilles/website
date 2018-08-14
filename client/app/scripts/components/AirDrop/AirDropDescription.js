import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Progress, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import classnames from 'classnames';

export default class AirDropDescription extends Component {
  static propTypes = {
    info: PropTypes.instanceOf(Array).isRequired,
  };
  static defaultProps = {};
  constructor(props) {
    super(props);
  }

  render() {
    const renderInfo = this.props.info.map((info, index) => (
      <div className="airdrop-tab-desc-step" key={index.toString()}>
        <div
          className={classnames('airdrop-tab-desc-num', {
            end: index === this.props.info.length - 1,
          })}
        >
          <span>{index + 1}</span>
        </div>
        <div className="airdrop-tab-desc-content">
          {info.title ? (
            <div className="airdrop-tab-desc-title">{ReactHtmlParser(info.title)}</div>
          ) : null}
          <div className="airdrop-tab-desc-body">{ReactHtmlParser(info.desc)}</div>
        </div>
      </div>
    ));
    return <div className="airdrop-tab-desc">{renderInfo}</div>;
  }
}
