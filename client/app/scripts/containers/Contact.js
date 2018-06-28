/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 1st April 2018 9:46:16 pm
 * Last Modified: Tuesday, 19th June 2018 10:57:53 pm
 */
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { go, goBack, push, replace } from 'react-router-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { Contact as ContactComponent, Navigation, Footer, Error } from '../components';
import { fetchContact } from '../actions';

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount = () => {
    console.log('contact mount');
    if (_.isEmpty(this.props.contact.data)) {
      this.props.fetchContact();
    }
  };

  componentWillReceiveProps = (nextProps) => {};
  componentWillUnmount = () => {
    console.log('contact unmount');
  };
  render() {
    if (_.isEmpty(this.props.contact.data)) {
      if (this.props.contact.fetching) {
        return <div />;
      }
      return <Error />;
    }
    const d = this.props.contact.data;
    return (
      <div className="page-contact" id="page-contact">
        <Navigation isHome />
        <ContactComponent data={d.contact} display />
        <Footer data={d.footer} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  contact: state.contact,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchContact,
  },
  dispatch);
export default connect(mapStateToProps,
  mapDispatchToProps)(Contact);
