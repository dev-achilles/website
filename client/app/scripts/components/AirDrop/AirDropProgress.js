import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'reactstrap';

export default class AirDropProgress extends Component {
  static propTypes = {
    total: PropTypes.number.isRequired,
    asigned: PropTypes.number.isRequired,
  };
  static defaultProps = {};
  constructor(props) {
    super(props);
  }

  render() {
    const asigned = Math.ceil(this.props.asigned);
    const total = Math.ceil(this.props.total);
    const percent = Math.ceil((this.props.asigned / this.props.total) * 100);
    return (
      <div className="airdrop-progress">
        <Progress value={percent}>
          <div className="progress-status">{percent}%</div>
        </Progress>
        <div className="progress-desc">
          ${asigned} of ${total} has already been assigned
        </div>
      </div>
    );
  }
}
