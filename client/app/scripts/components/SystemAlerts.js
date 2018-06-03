/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Friday, 20th April 2018 2:40:18 pm
 * Last Modified: Friday, 20th April 2018 4:00:00 pm
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Alert from './Alert';

class SystemAlerts extends Component {
  static propTypes = {
    alerts: PropTypes.arrayOf(PropTypes.object).isRequired,
    dispatch: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);

    this.timeouts = {};
  }
  componentDidMount = () => {};

  renderAlerts() {
    const { alerts, dispatch } = this.props;
    return alerts.map(d => <Alert key={d.id} {...d} dispatch={dispatch} />);
  }
  render() {
    return <div className="system-alerts">{this.renderAlerts()}</div>;
  }
}
const mapStateToProps = state => ({
  alerts: state.alerts,
});
export default connect(mapStateToProps)(SystemAlerts);
