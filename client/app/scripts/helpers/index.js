/*
 * Project: react-boilerplate
 * Author: Duong Le (navi.ocean@outlook.com)
 * File Created: Friday, 20th April 2018 8:01:30 pm
 * Last Modified: Tuesday, 29th May 2018 7:10:24 pm
 */
import { store } from '../store';
import { RESET } from '../actions/actionTypes';

const axios = require('axios');
const _ = require('lodash');

axios.interceptors.response.use(response => response,
  (error) => {
    // if 401 unauthorized reset reducers
    if (error.response.status === 401) {
      store.dispatch({
        type: RESET,
      });
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
        console.log(error);
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
