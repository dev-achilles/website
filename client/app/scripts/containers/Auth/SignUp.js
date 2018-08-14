/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Tuesday, 22nd May 2018 11:29:01 pm
 * Last Modified: Friday, 8th June 2018 7:57:48 am
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { SignUpComponent, ThankYouComponent, Navigation } from '../../components';

export class SignUp extends PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    const { signup, location } = this.props;
    const clicked = !_.isEmpty(location.query.ref);
    const referral = _.isEmpty(location.query.ref) ? this.props.referral : location.query.ref;
    return (
      <div className="page-auth" id="page-auth">
        <Navigation isHome data={{}} />
        {signup ? <ThankYouComponent /> : <SignUpComponent referral={referral} clicked={clicked} />}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state.auth,
  referral: state.referral,
});
export default connect(mapStateToProps)(SignUp);
