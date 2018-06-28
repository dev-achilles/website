import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  const render = (props) => {
    console.log(props);
    if (!auth.isAuthenticated || auth.status === 0) {
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      );
    }

    if (auth.status < 4 && props.match.path !== '/verify') {
      return (
        <Redirect
          to={{
            pathname: '/verify',
            state: { from: props.location },
          }}
        />
      );
    }
    if (auth.status === 4 && props.match.path !== '/keypair') {
      return (
        <Redirect
          to={{
            pathname: '/keypair',
            state: { from: props.location },
          }}
        />
      );
    }

    if (
      auth.status === 5 &&
      (props.match.path === '/verify' ||
        props.match.path === '/login' ||
        props.match.path === '/signup')
    ) {
      return (
        <Redirect
          to={{
            pathname: '/dashboard',
            state: { from: props.location },
          }}
        />
      );
    }
    return <Component {...props} />;
  };

  return <Route {...rest} render={props => render(props)} />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
