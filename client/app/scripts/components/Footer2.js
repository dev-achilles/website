/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 1st April 2018 8:55:09 am
 * Last Modified: Tuesday, 10th April 2018 4:08:15 pm
 */
import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import uuidv1 from 'uuid/v1';
import _ from 'lodash';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    // this.data = {
    //   show: true,
    //   title: 'HAWKING',
    //   address: 'Rancho Santa Margarita, MI',
    //   address2: 'Sunnyside 233, Zip: 41113',
    //   email: 'hawking@hw.com',
    //   contact: '+61 (0) 2 9119 6422',
    //   join_title: 'Join our newsletter',
    //   connect_title: 'Connect with us',
    //   button: {
    //     text: 'GO',
    //   },
    //   social: [
    //     {
    //       type: 'facebook-square',
    //       url: '#',
    //       title: 'facebook',
    //     },
    //     {
    //       type: 'twitter',
    //       url: '#',
    //       title: 'twitter',
    //     },
    //     {
    //       type: 'linkedin',
    //       url: '#',
    //       title: 'linkedin',
    //     },
    //     {
    //       type: 'instagram',
    //       url: '#',
    //       title: 'instagram',
    //     },
    //   ],
    // };
  }
  render() {
    if (_.isEmpty(this.props.data)) return null;

    const renderSocial = () =>
      this.props.data.social.map((item) => {
        if (item.url) {
          return (
            <a href={item.url} alt={item.title} key={uuidv1()}>
              <i className={`fa fa-${item.type}`} />
            </a>
          );
        }
        return null;
      });

    return (
      <div className="footer" id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-4 widget-1">
              <h2 className="title">{this.props.data.title}</h2>
              <div className="address">
                <p>{this.props.data.address}</p>
                <p>{this.props.data.address2}</p>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-4 widget-2">
              <div className="contact">
                <p>{this.props.data.email}</p>
                <p>{this.props.data.contact}</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4 widget-3">
              <div className="social">
                <div className="connect-title">{this.props.data.connect_title}</div>
                <div className="social-items">{renderSocial()}</div>
              </div>
              <div className="letter">
                <p className="join-title">{this.props.data.join_title}</p>
                <Form inline>
                  <FormGroup>
                    <Label for="exampleEmail" hidden>
                      Email
                    </Label>
                    <Input type="email" name="email" id="email" placeholder="Email" />
                  </FormGroup>
                  <Button className="join">{this.props.data.button.text}</Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
