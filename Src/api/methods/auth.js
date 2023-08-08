import { useSelector } from 'react-redux';
import {
  postRequest,
  getRequest,
  postWithFormRequest,
  getFilterRequest,
  deleteRequest,
} from '../index';


export const signUpAPI = payload => postWithFormRequest(`/register`, payload);
