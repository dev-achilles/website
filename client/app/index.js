import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import Setup from './scripts/Setup';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.hydrate(<Setup />, document.getElementById('root'));

const root = document.getElementById('root');
ReactDOM.render(<Setup />, root);
if (module.hot) {
  module.hot.accept('./scripts/Setup', () => {
    const NextApp = require('./scripts/Setup').default;
    ReactDOM.hydrate(<NextApp />, root);
  });
}
registerServiceWorker();
