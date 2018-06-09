/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Thursday, 31st May 2018 4:19:07 pm
 * Last Modified: Friday, 8th June 2018 7:58:11 am
 */
import React, { Component } from 'react';
import classnames from 'classnames';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Navigation, SideBarComponent, Button } from '../components';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="page-airdrop" id="page">
        <Row>
          <Col>
            <Navigation isFixed data={{}} />
          </Col>
        </Row>
        <Row className="body">
          <SideBarComponent active="airdrop" />
          <Col sm="12" md="8" lg="8" className="content">
            AirDrop
          </Col>
        </Row>
      </div>
    );
  }
}
