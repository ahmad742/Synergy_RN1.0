import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import { store } from '../redux'
const ROOT_URL = 'https://mine.hitlinux.com/public'; // dev server
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
    let requestConfig = { ...config }; // Copy config to avoid modifying the original object

    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        requestConfig.headers['Authorization'] = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('AsyncStorage Error:', error);
    }

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
