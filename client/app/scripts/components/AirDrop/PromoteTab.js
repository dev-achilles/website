import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';
import { Progress, Row, Col, FormText, Label } from 'reactstrap';
import {
  AvForm,
  AvFeedback,
  AvGroup,
  AvInput,
  AvRadioGroup,
  AvRadio,
  AvField,
} from 'availity-reactstrap-validation';
import AirDropDescription from './AirDropDescription';
import { Button } from '..';
import {
  joinPromoteBitcointalk,
  joinPromoteTwitter,
  addLinkPromoteBitcointalk,
  addLinkPromoteTwitter,
} from '../../actions';
import Table from './table';

class AirDropPromoteTab extends Component {
  static propTypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);
    // this.data = {
    //   bitcointalk: {
    //     info: [
    //       {
    //         title: 'Add signature',
    //         desc: 'Add hawking.network signature to your bitcointalk profile.',
    //       },
    //       {
    //         title: 'Post or Comment',
    //         desc: 'Make at least 10 posts or comments a week.',
    //       },
    //       {
    //         title: 'Post links',
    //         desc: 'Post links to your posts in the <a href="#">
    // bounty ANN thread</a> once a week.',
    //       },
    //     ],
    //     payouts: [
    //       {
    //         title: 'Hero',
    //         earn: 100,
    //       },
    //       {
    //         title: 'Sr.Member',
    //         earn: 95,
    //       },
    //       {
    //         title: 'Full Member',
    //         earn: 90,
    //       },
    //       {
    //         title: 'Member',
    //         earn: 50,
    //       },
    //     ],
    //     username: '',
    //     account_id: '',
    //     rank: '',
    //     status: false,
    //   },
    //   twitter: {
    //     info: [
    //       {
    //         title: '',
    //         desc: 'Post links to your posts in the <a href="#">
    // bounty ANN thread</a> once a week.',
    //       },
    //       {
    //         title: '',
    //         desc: 'Retweet and comment a post from @hawking.network',
    //       },
    //     ],
    //     payouts: [
    //       {
    //         title: '<1.000 Followers',
    //         min: 100,
    //         max: 999,
    //         earn: 1,
    //       },
    //       {
    //         title: '1.000+ Followers',
    //         min: 1000,
    //         max: 9999,
    //         earn: 3,
    //       },
    //       {
    //         title: '10.000+ Followers',
    //         min: 10000,
    //         max_followers: 0,
    //         earn: 5,
    //       },
    //     ],
    //     username: 'naviocean',
    //     status: true,
    //   },
    // };
    const { data } = this.props;
    this.state = {
      bitcoinStep: this._getBitcointalkStep(),
      twitterStep: this._getTwitterStep(),
      bitcointalk: !!data.bitcointalk.username,
      twitter: !!data.twitter.username,
    };
  }
  componentWillReceiveProps = (nextProps) => {
    if (this.props.data !== nextProps.data) {
      console.log(nextProps.data);
      this.setState({
        bitcoinStep: this._getBitcointalkStep(),
        bitcointalk: !!nextProps.data.bitcointalk.username,
        twitter: !!nextProps.data.twitter.username,
      });
    }
  };

  _promoteBitcointalk = (
    event, errors, values,
  ) => {
    // eslint-disable-next-line
    this.setState({ errors, values });
    if (errors.length === 0) {
      this.props.joinPromoteBitcointalk(values);
    }
    console.log(
      'errors', errors, 'values', values,
    );
  };
  _validateTwitterLink = (link) => {
    const re = new RegExp('^(?:http://)?(?:www\\.)?twitter\\.com/(\\w+)$', 'i');
    return re.test(link);
  };

  _addBitcoinPost = (
    event, errors, values,
  ) => {
    // eslint-disable-next-line
    this.setState({ errors, values });
    if (errors.length === 0) {
      this.props.addLinkPromoteBitcointalk(values);
    }
    console.log(
      'errors', errors, 'values', values,
    );
  };

  _addTwitterPost = (
    event, errors, values,
  ) => {
    // eslint-disable-next-line
    this.setState({ errors, values });
    if (errors.length === 0) {
      this.props.addLinkPromoteTwitter(values);
    }
    console.log(
      'errors', errors, 'values', values,
    );
  };


  _promoteTwitter = (
    event, errors, values,
  ) => {
    // eslint-disable-next-line
    this.setState({ errors, values });
    if (errors.length === 0) {
      this.props.joinPromoteTwitter(values);
    }
    console.log(
      'errors', errors, 'values', values,
    );
  };

  _onJoinBitcointalk = () => {
    this.setState({ bitcoinStep: this._getBitcointalkStep() });
  };

  _onChangeValue = (e, type) => {
    const { data } = this.props;
    const { value } = e.target;
    if (type === 'twitter') this.setState({ twitter: value === data.twitter.username });
    else this.setState({ bitcointalk: value === data.bitcointalk.username });
  };

  _onChangeAccount = (e) => {
    const { data } = this.props;
    const { value } = e.target;
    console.log(value, data.bitcointalk.account_id);
    // eslint-disable-next-line
    this.setState({ bitcointalk: value == data.bitcointalk.account_id });
  };

  _onBitcointalkGuide = () => {
    this.setState({
      bitcoinStep: 1,
    });
  };
  _onTwitterGuide = () => {
    this.setState({
      twitterStep: 1,
    });
  };
  _onBitcointalkEdit = () => {
    this.setState({
      bitcoinStep: 2,
    });
  };

  _onTwitterEdit = () => {
    this.setState({
      twitterStep: 2,
    });
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

  _getBitcointalkStep = () => {
    const { data } = this.props;
    if (data.bitcointalk.username && !data.bitcointalk.status) return 2;
    if (data.bitcointalk.username && data.bitcointalk.status) return 3;
    return 1;
  };

  _getTwitterStep = () => {
    const { data } = this.props;
    if (data.twitter.status) return 2;
    return 1;
  };

  renderBitcointalk = () => {
    const { bitcoinStep } = this.state;
    const { data } = this.props;
    if (bitcoinStep === 1) {
      return (
        <Fragment>
          <AirDropDescription info={data.bitcointalk.info} />
          <div className="payouts">
            <h3>Bounty Payouts</h3>
            {this.renderPayouts(data.bitcointalk.payouts, 'per week')}
          </div>
          <Button
            className="button-light"
            upperCase
            iconRight="long-arrow-right"
            onClick={this._onJoinBitcointalk}
          >
            Join and earn
          </Button>
        </Fragment>
      );
    }
    if (bitcoinStep === 2) {
      return (
        <AvForm
          className={classnames('bitcointalk-promote-form', {
            waiting: !data.bitcointalk.status && this.state.bitcointalk,
          })}
          ref={(ref) => {
            this.formBitcoin = ref;
          }}
          onSubmit={this._promoteBitcointalk}
        >
          <AvGroup>
            <Label for="bitcoin_username">Bitcointalk forum username</Label>
            <AvInput
              name="username"
              id="bitcoin_username"
              className={classnames({ submitted: this.state.bitcointalk })}
              value={data.bitcointalk.username}
              placeholder="Your Bitcointalk forum username"
              onChange={e => this._onChangeValue(e, 'bitcointalk')}
              required
            />
            <AvFeedback>This is invalid!</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label for="bitcoin_account">Bitcointalk forum account ID</Label>
            <AvInput
              name="account_id"
              className={classnames({ submitted: this.state.bitcointalk })}
              onChange={e => this._onChangeAccount(e)}
              id="bitcoin_account"
              placeholder="Your Bitcointalk forum account ID"
              value={data.bitcointalk.account_id}
              required
            />
            <AvFeedback>This is invalid!</AvFeedback>
          </AvGroup>
          <AvRadioGroup
            name="rank"
            label="Your account rank"
            value={data.bitcointalk.rank}
            required
          >
            <AvRadio label="Member" value="member" />
            <AvRadio label="Full Member" value="full_member" />
            <AvRadio label="Sr. Member" value="sr_member" />
            <AvRadio label="Hero/Legendary" value="hero" />
          </AvRadioGroup>
          <div className="bitcoin-guide">
            <p>Copy the Hawking signature (click here). </p>
            <p>Make this your signature in your Bitcointalk profile.</p>
            <p>Make a Bitcointalk post that includes your Brickblock signature.</p>
          </div>
          <Button
            className="button-back-icon"
            upperCase
            iconLeft="long-arrow-left"
            onClick={this._onBitcointalkGuide}
          />
          <Button
            className={classnames('button-light', {
              'justify-content-flex-start': data.bitcointalk.username && this.state.bitcointalk,
            })}
            upperCase
            iconLeft={this._generateButtonIcon('bitcointalk')}
            onClick={() => this.formBitcoin.submit()}
            disabled={this.state.telegram}
          >
            {this._generateButtonText('bitcointalk')}
          </Button>
        </AvForm>
      );
    }
    if (bitcoinStep === 3) {
      return (
        <AvForm
          className={classnames('bitcointalk-add-post')}
          ref={(ref) => {
            this.formBitcoinPost = ref;
          }}
          onSubmit={this._addBitcoinPost}
        >
          <div className="account-info">
            <Button
              className="button-back-icon"
              upperCase
              iconLeft="long-arrow-left"
              onClick={this._onBitcointalkGuide}
            />
            <div className="account username">
              <i className="fa fa-user" /> {data.bitcointalk.username}
            </div>
            <div className="account account-id">
              <i className="fa fa-sign-in" /> {data.bitcointalk.account_id}
            </div>
            <div className="account rank">
              <i className="fa fa-certificate" /> {data.bitcointalk.rank}
            </div>

            <Button
              className="button-guide-icon"
              upperCase
              iconLeft="pencil"
              onClick={this._onBitcointalkEdit}
            />
          </div>
          <Table data={data.bitcointalk.links} />
          <AvGroup className="mb-2 mr-sm-2 mb-sm-0">
            <div className="inline">
              <AvInput type="text" name="link" id="link" placeholder="Your post link" required />
              <Button
                className="button-light"
                upperCase
                onClick={() => this.formBitcoinPost.submit()}
              >
                Add
              </Button>
            </div>
          </AvGroup>
        </AvForm>
      );
    }

    return null;
  };

  renderPayouts = (payouts, per) => {
    const render = payouts.map((item, index) => (
      <Col
        sm={6}
        md={6}
        lg={6}
        xl={3}
        key={index.toString()}
        className="wrap-payout-item display-flex"
      >
        {item.title}
        <div className="payout-earn">
          <strong>{item.earn}*</strong> {per}
        </div>
      </Col>
    ));
    return <Row>{render}</Row>;
  };

  renderTwitter = () => {
    const { data } = this.props;
    const { twitterStep } = this.state;
    if (twitterStep === 1) {
      return (
        <Fragment>
          <AirDropDescription info={data.twitter.info} />
          <div className="payouts">
            <h3>Bounty Payouts</h3>
            {this.renderPayouts(data.twitter.payouts, 'per retweet & comment')}
          </div>
          <div className="twitter-rule">
            <h3>Rules</h3>
            <ul>
              <li>You must follow Hawking until the end of the ICO.</li>
              <li>You must start by retweeting & commenting Hawking’s pinned message.</li>
              <li>You could be disqualified if we discover any irregularity with your account.</li>
            </ul>
          </div>
          <AvForm
            className={classnames('twitter-promote-form', {
              waiting: !data.twitter.status && this.state.twitter,
            })}
            ref={(ref) => {
              this.formTwitter = ref;
            }}
            onSubmit={this._promoteTwitter}
          >
            <AvGroup>
              <AvInput
                placeholder="Twitter username"
                name="username"
                id="tw_username"
                value={data.twitter.username}
                className={classnames({ submitted: this.state.twitter })}
                onChange={e => this._onChangeValue(e, 'twitter')}
                required
              />
              <AvFeedback>This is invalid!</AvFeedback>
              <FormText color="muted">
                You can participate in this bounty only when your handle gets approved in the follow
                section.
              </FormText>
            </AvGroup>
            {this.state.twitter ? (
              <Button
                className={classnames('button-light', {
                  'justify-content-flex-start': data.bitcointalk.username && this.state.bitcointalk,
                })}
                upperCase
                iconLeft={this._generateButtonIcon('twitter')}
                onClick={() => this.formBitcoin.submit()}
                disabled={this.state.telegram}
              >
                {this._generateButtonText('twitter')}
              </Button>
            ) : (
              <Button
                className="button-light"
                upperCase
                iconRight="long-arrow-right"
                onClick={() => {
                  this.formTwitter.submit();
                }}
              >
                Join and earn
              </Button>
            )}
          </AvForm>
        </Fragment>
      );
    }
    return (
      <AvForm
        className={classnames('twitter-add-post')}
        ref={(ref) => {
          this.formTwitterPost = ref;
        }}
        onSubmit={this._addTwitterPost}
      >
        <div className="account-info">
          <Button
            className="button-back-icon"
            upperCase
            iconLeft="long-arrow-left"
            onClick={this._onTwitterGuide}
          />
          <div className="account username">
            <i className="fa fa-twitter" /> {data.twitter.username}
          </div>
          <div className="account rank">
            <i className="fa fa-users" /> {data.twitter.follower}
          </div>

          <Button
            className="button-guide-icon"
            upperCase
            iconLeft="pencil"
            onClick={this._onTwitterEdit}
          />
        </div>
        <Table data={data.twitter.links} />
        <AvGroup className="mb-2 mr-sm-2 mb-sm-0">
          <div className="inline">
            <AvInput type="text" name="link" id="link" placeholder="Your post link" required />
            <Button
              className="button-light"
              upperCase
              onClick={() => this.formTwitterPost.submit()}
            >
              Add
            </Button>
          </div>
        </AvGroup>
      </AvForm>
    );
  };

  render() {
    const { data } = this.props;
    if (_.isEmpty(data)) return null;
    return (
      <div className="airdrop-promote-tab">
        <Row className="airdrop-promote-bitcointalk row-content">
          <Col sm="12">
            <div className="bitcointalk-header">
              <img
                src={require('../../../assets/images/ic-bitcoin@2x.png')}
                alt="Bitcointalk"
                title="Bitcointalk"
              />
              <h3>Bitcointalk forum bounty</h3>
            </div>
            {this.renderBitcointalk()}
          </Col>
        </Row>
        <Row className="airdrop-promote-twitter row-content">
          <Col sm="12">
            <div className="twitter-header">
              <img
                src={require('../../../assets/images/ic-twitter@2x.png')}
                alt="twitter"
                title="twitter"
              />
              <h3>Twitter bounty</h3>
            </div>

            {this.renderTwitter()}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.airdrop.promote,
});

const mapDispatchToProps = dispatch => ({
  joinPromoteBitcointalk: data => dispatch(joinPromoteBitcointalk(data)),
  joinPromoteTwitter: data => dispatch(joinPromoteTwitter(data)),
  addLinkPromoteTwitter: data => dispatch(addLinkPromoteTwitter(data)),
  addLinkPromoteBitcointalk: data => dispatch(addLinkPromoteBitcointalk(data)),
  dispatch,
});

export default connect(mapStateToProps,
  mapDispatchToProps)(AirDropPromoteTab);
