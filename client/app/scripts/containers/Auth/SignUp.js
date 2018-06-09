/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Tuesday, 22nd May 2018 11:29:01 pm
 * Last Modified: Friday, 8th June 2018 7:57:48 am
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { SignUpComponent, ThankYouComponent, Navigation } from '../../components';

export class SignUp extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { signup } = this.props;
    return (
      <div className="page-auth" id="page-auth">
        <Navigation isHome data={{}} />
        {signup ? <ThankYouComponent /> : <SignUpComponent />}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state.auth,
});
export default connect(mapStateToProps)(SignUp);
