import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import ReactHtmlParser from 'react-html-parser';
import { Row, Col } from 'reactstrap';
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

export default class NavSections extends Component {
  render() {
    const hexagon = require('../../../assets/images/hexagon.png');
    const hexagonActive = require('../../../assets/images/hexagon-active.png');
    const renderItems = this.props.data.map(item => (
      <div key={uuidv1()} className="item">
        <Link
          activeClass="active"
          to={item.section}
          spy
          smooth
          offset={-20}
          isDynamic
          duration={500}
        >
          <div className="nav-hexagon">
            <img className="img-active" src={hexagonActive} alt="" />
            <img className="img-inactive" src={hexagon} alt="" />
          </div>
          <div className="nav-title">{item.title}</div>
        </Link>
      </div>
    ));
    return <div className="nav-sections">{renderItems}</div>;
  }
}
