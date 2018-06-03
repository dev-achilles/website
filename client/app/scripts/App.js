import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
// import createHistory from 'history/createBrowserHistory';

import Routes from './routers';
import history from './history';
// const history = createHistory();
class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    );
  }
}

export default App;
