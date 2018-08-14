import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Progress, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { AvForm, AvInput, AvGroup } from 'availity-reactstrap-validation';
import _ from 'lodash';
import { Button } from '../../components';
import AirDropDescription from './AirDropDescription';
import { submitInviteEmail } from '../../actions';

class AirDropInviteTab extends Component {
  static propTypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);
    // this.data = {
    // share: {
    //   fb: {
    //     icon: 'fa-facebook',
    //   },
    //   twitter: {
    //     icon: 'fa-twitter',
    //   },
    //   linkedin: {
    //     icon: 'fa-linkedin',
    //   },
    //   telegram: {
    //     icon: 'fa-paper-plane',
    //   },
    // },
    // info: [
    //   {
    //     title: '',
    //     desc: 'Invite your friends or share a referral link',
    //   },
    //   {
    //     title: '',
    //     desc: 'Earn <strong>$3.00*</strong> when a friend signs up and verifies their account',
    //   },
    // ],
    // content: 'The best crypto merchant paygate',
    // url: 'https://airdrop.hawking.network/r/LGXN4hNNP231eijuDDlLQ9D9lES7nv8B',
    // statistics: {
    //   clicked: 999,
    //   signed_up: 199,
    //   verified: 90,
    // },
    // };
  }

  _copy = () => {
    const textArea = document.createElement('textarea');
    textArea.value = this.props.data.url;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('Copy');
    textArea.remove();
  };

  _sendInvite = (
    event, errors, values,
  ) => {
    // eslint-disable-next-line
    this.setState({ errors, values });
    // this.props.submitSignUp(values);
    if (errors.length === 0) {
      this.props.submitInviteEmail(values);
    }
    console.log(
      'errors', errors, 'values', values,
    );
  };

  render() {
    const { data } = this.props;
    if (_.isEmpty(data)) return null;
    const content = encodeURI(data.content);
    const fbUrl = `https://www.facebook.com/sharer.php?u=${data.url}`;
    const linkedinUrl = `https://www.linkedin.com/shareArticle?url=${data.url}&title=${content}`;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${data.url}&text=${content}`;
    const telegramUrl = `https://telegram.me/share/url?url=${data.url}&text=${content}`;
    return (
      <Row className="airdrop-invite-tab row-content">
        <Col sm="12">
          <AirDropDescription info={data.info} />
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="referral">Personal referral link</Label>
            <div className="inline">
              <Input type="text" name="referral" id="referral" disabled value={data.url} />
              <Button
                className="button-light btn-copy"
                data-clipboard-text={data.url}
                upperCase
                onClick={() => this._copy()}
              >
                Copy
              </Button>
            </div>
          </FormGroup>
          <AvForm
            className="invite-form"
            ref={(ref) => {
              this.form = ref;
            }}
            onSubmit={this._sendInvite}
          >
            <AvGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="invite">Send invite via email</Label>
              <div className="inline">
                <AvInput
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Ex. you@company.com"
                  required
                />
                <Button
                  className="button-light"
                  upperCase
                  onClick={() => {
                    this.form.submit();
                  }}
                >
                  Send
                </Button>
              </div>
            </AvGroup>
          </AvForm>
          <div className="airdrop-share">
            <Label>Share on:</Label>
            <div className="airdrop-share-icon">
              <a href={fbUrl} alt="" className="btn-icon">
                <img
                  src={require('../../../assets/images/ic-fb@2x.png')}
                  alt="Twitter"
                  title="Twitter"
                />
                {/* <i className={`fa ${this.data.share.fb.icon}`} /> */}
              </a>
              <a href={twitterUrl} alt="" className="btn-icon">
                <img
                  src={require('../../../assets/images/ic-twitter@2x.png')}
                  alt="Twitter"
                  title="Twitter"
                />
                {/* <i className={`fa ${this.data.share.twitter.icon}`} /> */}
              </a>
              <a href={telegramUrl} alt="" className="btn-icon">
                <img
                  src={require('../../../assets/images/ic-share@2x.png')}
                  alt="Telegram"
                  title="Telegram"
                />
                {/* <i className={`fa ${this.data.share.telegram.icon}`} /> */}
              </a>
              <a href={linkedinUrl} alt="" className="btn-icon">
                <img
                  src={require('../../../assets/images/ic-linkedin@2x.png')}
                  alt="Linkedin"
                  title="Linkedin"
                />
                {/* <i className={`fa ${this.data.share.linkedin.icon}`} /> */}
              </a>
            </div>
          </div>
          <div className="airdrop-invite-statistics">
            <Label>Actions by people you have invited </Label>
            <Row>
              <Col sm={6} md={3} lg={3} xl={3} className="wrap-item display-flex clicked">
                <span>{data.statistics.clicked}</span>
                Clicked
              </Col>
              <Col sm={6} md={3} lg={3} xl={3} className="wrap-item display-flex signed">
                <span>{data.statistics.signup}</span>
                Clicked
              </Col>
              <Col sm={6} md={3} lg={3} xl={3} className="wrap-item display-flex verified">
                <span>{data.statistics.verified}</span>
                Clicked
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  data: state.airdrop.invite,
});

const mapDispatchToProps = dispatch => ({
  submitInviteEmail: data => dispatch(submitInviteEmail(data)),
  dispatch,
});

export default connect(mapStateToProps,
  mapDispatchToProps)(AirDropInviteTab);
