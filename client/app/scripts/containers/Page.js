/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Saturday, 14th April 2018 12:48:26 pm
 * Last Modified: Saturday, 14th April 2018 4:04:24 pm
 */
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import ReactHtmlParser from 'react-html-parser';

import { Navigation } from '../components';

class Page extends Component {
  constructor(props) {
    super(props);
    this.data = {
      header: {
        button: {
          text: 'JOIN PRE-SALE NOW',
          show: true,
          link: '#',
        },
        show: true,
        title: 'HAWKING',
        nav: [
          {
            title: 'Whitepaper',
            url: '#',
          },
          {
            title: 'Crowdsale',
            url: '#',
          },
          {
            title: 'Road Map',
            url: '#',
          },
        ],
      },
      page: {
        title: 'Lorem Ipsum',
        content: `<ul>
        <li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>
        <li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>
        <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
        <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
     </ul>`,
        seo: {
          title: 'Lorem Ipsum',
          description: 'Lorem Ipsum',
          og: {
            title: 'Lorem Ipsum',
            description: 'Lorem Ipsum',
          },
        },
      },
    };
  }
  goback = () => {
    this.props.goBack();
  };
  render() {
    return (
      <div className="page" id="page">
        <Navigation isPage data={this.data.header} />
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto align-items-center justify-content-center">
              <h2 className="section-heading">{this.data.page.title}</h2>
              <div className="content">{ReactHtmlParser(this.data.page.content)}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(goBack()),
  dispatch,
});
export default connect(null, mapDispatchToProps)(Page);
