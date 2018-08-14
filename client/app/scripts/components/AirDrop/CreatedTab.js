import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Progress, Row, Col } from 'reactstrap';
import AriDropDescription from './AirDropDescription';

export default class AirDropCreatedTab extends Component {
  static propTypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.info = [
      {
        title: 'Add your profile',
        desc: "Add the profile that you'll use to follow us.",
      },
      {
        title: 'Follow us',
        desc: "Visit Hawking's social media channels and follow them.",
      },
      {
        title: 'Earn <strong>$0.60*</strong>',
        desc: 'Earn for each channel you follow (might take 24h)',
      },
    ];
  }

  render() {
    return (
      <Row className="airdrop-created-tab row-content">
        <Col sm="12">
          <AriDropDescription info={this.info} />
        </Col>
      </Row>
    );
  }
}
