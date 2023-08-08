import axios from 'axios';

import { store } from '../redux'
const ROOT_URL = 'https://mine.hitlinux.com/public/api'; // dev server
const BASE_URL = `${ROOT_URL}/api`;

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use(
  async (config) => {
    const requestConfig = config;
    const { authenticationToken } = store.getState().userSession;
    // console.log("Authorization Token--->", authenticationToken)
    if (authenticationToken) {
      requestConfig.headers = {
        'Authorization': `Bearer ${authenticationToken.token}`,
      };
    }
    // console.log('requestConfig----->', requestConfig)
    return requestConfig;
  },

  (err) => {
    // showErrorMsg(err);
    return Promise.reject(err);
  },
);

export {
  ROOT_URL,
  BASE_URL,
  client,
};
