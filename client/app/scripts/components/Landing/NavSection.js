import React, { Component } from 'react';
import { connect } from 'react-redux';
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

class NavSections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: new Set(),
    };
  }

  componentDidMount = () => {
    if (this.props.data && typeof this.props.data.sorted !== 'undefined') {
      this.processData();
    }
  };

  componentWillReceiveProps = (nextProps) => {
    if (this.props.data !== nextProps.data && typeof nextProps.data.sorted !== 'undefined') {
      this.processData();
    }
  };

  processData = () => {
    const data = new Set();
    // eslint-disable-next-line
    this.props.data.sorted.map(section => {
      switch (section.section) {
        case 'intro':
          data.add(section);
          break;
        case 'presale':
          data.add(section);
          break;
        case 'meet':
          data.add(section);
          break;
        case 'howit':
          data.add(section);
          break;
        case 'whitepaper':
          data.add(section);
          break;
        case 'roadmap':
          data.add(section);
          break;
        case 'team':
          data.add(section);
          break;
        case 'advisor':
          data.add(section);
          break;
        default:
          break;
      }
    });
    this.setState({ data });
  };

  render() {
    const hexagon = require('../../../assets/images/hexagon.png');
    const hexagonActive = require('../../../assets/images/hexagon-active.png');
    const data = Array.from(this.state.data);
    const renderItems = data.map(item => (
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

const mapStateToProps = state => ({
  ...state.home,
});

export default connect(mapStateToProps)(NavSections);
