import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Progress, Row, Col, Label } from 'reactstrap';
import { AvForm, AvFeedback, AvGroup, AvInput } from 'availity-reactstrap-validation';
import ReactHtmlParser from 'react-html-parser';
import classnames from 'classnames';
import _ from 'lodash';
import { submitFollowTelegram, submitFollowTwitter } from '../../actions';
import { Button } from '../../components';
import AirDropDescription from './AirDropDescription';

class AirDropFollowTab extends Component {
  static propTypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);
    // this.data = {
    //   info: [
    //     {
    //       title: 'Add your profile',
    //       desc: "Add the profile that you'll use to follow us.",
    //     },
    //     {
    //       title: 'Follow us',
    //       desc: "Visit Hawking's social media channels and follow them.",
    //     },
    //     {
    //       title: 'Earn <strong>$0.60*</strong>',
    //       desc: 'Earn for each channel you follow (might take 24h)',
    //     },
    //   ],
    //   telegram: {
    //     username: 'naviocean',
    //     earn: '$0.6',
    //     desc: `Add your username (with or without “@“) and join <a href="#"></a>
    // Hawkings Telegram channel</a> and <a href="#">Hawking’s News channel</a>
    // until the end of the ICO, if you already joined the channels, please rejoin them.`,
    //     status: true,
    //   },
    //   twitter: {
    //     username: 'xxxx',
    //     earn: '$0.6',
    //     desc: `Add your username (with or without “@“) and follow <a href="#">
    // Hawking’s Twitter account</a> until the end of the ICO.`,
    //     status: false,
    //   },
    // };
    const { data } = this.props;
    this.state = {
      twitter: !!data.twitter.username,
      telegram: !!data.telegram.username,
    };
  }
  componentWillReceiveProps = (nextProps) => {
    if (this.props.data !== nextProps.data) {
      this.setState({
        twitter: !!nextProps.data.twitter.username,
        telegram: !!nextProps.data.telegram.username,
      });
    }
  };

  _followTelegram = (
    event, errors, values,
  ) => {
    // eslint-disable-next-line
    this.setState({ errors, values });
    // this.props.submitSignUp(values);
    if (errors.length === 0) {
      this.props.submitFollowTelegram(values);
    }
    console.log(
      'errors', errors, 'values', values,
    );
  };

  _followTwitter = (
    event, errors, values,
  ) => {
    // eslint-disable-next-line
    this.setState({ errors, values });
    // this.props.submitSignUp(values);
    if (errors.length === 0) {
      this.props.submitFollowTwitter(values);
    }
    console.log(
      'errors', errors, 'values', values,
    );
  };

  _onChangeValue = (e, type) => {
    const { data } = this.props;
    const { value } = e.target;
    if (type === 'twitter') this.setState({ twitter: value === data.twitter.username });
    else this.setState({ telegram: value === data.telegram.username });
  };

  _generateButtonIcon = (type) => {
    const { state } = this;
    const { data } = this.props;
    if (data[type].username && data[type].status && state[type]) {
      return 'check';
    }
    if (data[type].username && !data[type].status && state[type]) {
      return 'exclamation';
    }
    return '';
  };

  _generateButtonText = (type) => {
    const { state } = this;
    const { data } = this.props;
    if (data[type].username && data[type].status && state[type]) {
      return 'Success';
    }
    if (data[type].username && !data[type].status && state[type]) {
      return 'Pending';
    }
    return `Submit`;
  };

  render() {
    const { data } = this.props;
    if (_.isEmpty(data)) return null;
    return (
      <Row className="airdrop-follow-tab row-content">
        <Col sm="12">
          <AirDropDescription info={data.info} />
          <AvForm
            className="telegram-form"
            ref={(ref) => {
              this.formTelegram = ref;
            }}
            onSubmit={this._followTelegram}
          >
            <AvGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="telegram">
                <img
                  src={require('../../../assets/images/ic-share@2x.png')}
                  alt="telegram"
                  title="telegram"
                />{' '}
                Telegram
              </Label>
              <div
                className={classnames('inline', {
                  waiting: !data.telegram.status && this.state.telegram,
                })}
              >
                <AvInput
                  type="text"
                  name="telegram"
                  id="telegram"
                  placeholder="Telegram username"
                  className={classnames({ submitted: this.state.telegram })}
                  value={data.telegram.username}
                  required
                  onChange={e => this._onChangeValue(e, 'telegram')}
                />
                <Button
                  className="button-light"
                  upperCase
                  iconLeft={this._generateButtonIcon('telegram')}
                  onClick={() => {
                    this.formTelegram.submit();
                  }}
                  disabled={this.state.telegram}
                >
                  {this._generateButtonText('telegram')}
                </Button>
              </div>
              <div className="desc">{ReactHtmlParser(data.telegram.desc)}</div>
            </AvGroup>
          </AvForm>
          <AvForm
            className="twiter-form"
            ref={(ref) => {
              this.formTwitter = ref;
            }}
            onSubmit={this._followTwitter}
          >
            <AvGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="twitter">
                <img
                  src={require('../../../assets/images/ic-twitter@2x.png')}
                  alt="Twitter"
                  title="Twitter"
                />{' '}
                Twitter
              </Label>
              <div
                className={classnames('inline', {
                  waiting: !data.twitter.status && this.state.twitter,
                })}
              >
                <AvInput
                  type="text"
                  name="twitter"
                  id="twitter"
                  className={classnames({ submitted: this.state.twitter })}
                  placeholder="Twitter username"
                  value={data.twitter.username}
                  onChange={e => this._onChangeValue(e, 'twitter')}
                  required
                />
                <Button
                  className="button-light"
                  upperCase
                  iconLeft={this._generateButtonIcon('twitter')}
                  onClick={() => {
                    this.formTwitter.submit();
                  }}
                  disabled={this.state.twitter}
                >
                  {this._generateButtonText('twitter')}
                </Button>
              </div>
              <div className="desc">{ReactHtmlParser(data.twitter.desc)}</div>
            </AvGroup>
          </AvForm>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  data: state.airdrop.follow,
});

const mapDispatchToProps = dispatch => ({
  submitFollowTelegram: data => dispatch(submitFollowTelegram(data)),
  submitFollowTwitter: data => dispatch(submitFollowTwitter(data)),
  dispatch,
});

export default connect(mapStateToProps,
  mapDispatchToProps)(AirDropFollowTab);
