/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Sunday, 1st April 2018 8:16:41 pm
 * Last Modified: Friday, 27th April 2018 8:41:00 am
 */
import createHistory from 'history/createBrowserHistory';
// import createHistory from 'history/createMemoryHistory';
import qs from 'qs';

const history = createHistory();

history.location = {
  ...history.location,
  query: qs.parse(history.location.search.substr(1)),
  state: { modal: false, scroll: false },
};

/* istanbul ignore next */
history.listen(() => {
  history.location = {
    ...history.location,
    query: qs.parse(history.location.search.substr(1)),
    state: history.location.state || {},
  };
});

export default history;
