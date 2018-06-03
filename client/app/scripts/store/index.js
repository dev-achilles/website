/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Thursday, 29th March 2018 11:10:40 am
 * Last Modified: Sunday, 3rd June 2018 3:36:20 pm
 */
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { createWhitelistFilter } from 'redux-persist-transform-filter';
import storage from 'redux-persist/lib/storage';
// import createHistory from 'history/createBrowserHistory';
import history from '../history';
import saga from '../sagas';
import reducers from '../reducers';

// const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const config = {
  key: 'root',
  storage,
  whitelist: ['app', 'home', 'contact', 'auth', 'user'],
  transforms: [createWhitelistFilter('auth', ['isAuthenticated', 'status', 'token'])],
};
const middleware = [sagaMiddleware, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger');

  middleware.push(createLogger({ collapsed: true }));
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configStore = (initialState = {}) => {
  const enhancers = [applyMiddleware(...middleware)];
  const persistConfig = { enhancers };
  const store = createStore(
    persistCombineReducers(config, reducers),
    initialState,
    composeEnhancers(...enhancers),
  );
  const persistor = persistStore(store, persistConfig);

  sagaMiddleware.run(saga);
  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('../reducers', () => {
        store.replaceReducer(reducers.default);
      });
    }
  }
  return { persistor, store };
};

const { store, persistor } = configStore();

export { store, persistor };
