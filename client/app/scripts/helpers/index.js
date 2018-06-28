/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Friday, 20th April 2018 8:01:30 pm
 * Last Modified: Tuesday, 26th June 2018 7:21:14 am
 */
import { store } from '../store';
import { RESET, UPDATE_USER_STATUS } from '../actions/actionTypes';

const axios = require('axios');
const _ = require('lodash');

axios.interceptors.response.use((response) => {
  if (typeof response.data.data.status !== 'undefined') {
    store.dispatch({
      type: UPDATE_USER_STATUS,
      payload: response.data.data.status,
    });
    delete response.data.data.status;
  }
  return Promise.resolve(response);
},
(error) => {
  // if 401 unauthorized reset reducers

  if (error.response.status === 401) {
    store.dispatch({
      type: RESET,
    });
  } else if (typeof error.response.data.data.status !== 'undefined') {
    store.dispatch({
      type: UPDATE_USER_STATUS,
      payload: error.response.data.data.status,
    });
    delete error.response.data.data;
  }
  return Promise.reject(error);
});

export const getData = url =>
  new Promise((resolve, reject) => {
    const { auth } = store.getState();
    let config = {};
    if (auth.isAuthenticated && auth.token) {
      config = {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      };
    }
    axios
      .get(url, config)
      .then(response => resolve(response.data))
      .catch((error) => {
        let data =
          error.response && !_.isEmpty(error.response.data)
            ? error.response.data
            : { status: 'error', message: 'Something went wrong!' };
        if (!data.status) data = { status: 'error', message: data };
        return reject(data);
      });
  });

export const putData = (url, postdata) =>
  new Promise((resolve, reject) => {
    const { auth } = store.getState();
    let config = {};
    if (auth.isAuthenticated && auth.token) {
      config = {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      };
    }
    axios
      .put(
        url, postdata, config,
      )
      .then(response => resolve(response.data))
      .catch((error) => {
        let data =
          error.response && !_.isEmpty(error.response.data)
            ? error.response.data
            : { status: 'error', message: 'Something went wrong!' };
        if (!data.status) data = { status: 'error', message: data };
        return reject(data);
      });
  });

export const postData = (url, postdata) =>
  new Promise((resolve, reject) => {
    const { auth } = store.getState();
    let config = {};
    if (auth.isAuthenticated && auth.token) {
      config = {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      };
    }
    axios
      .post(
        url, postdata, config,
      )
      .then(response => resolve(response.data))
      .catch((error) => {
        let data =
          error.response && !_.isEmpty(error.response.data)
            ? error.response.data
            : { status: 'error', message: 'Something went wrong!' };
        if (!data.status) data = { status: 'error', message: data };
        return reject(data);
      });
  });

export const filterData = (data) => {
  const result = Object.assign({}, data.data);
  if (typeof result !== 'undefined' && typeof result.user !== 'undefined') {
    delete result.user;
  }
  console.log(result);
  return result;
};
