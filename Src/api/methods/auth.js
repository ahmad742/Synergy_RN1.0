import { useSelector } from 'react-redux';
import {
  postRequest,
  getRequest,
  postWithFormRequest,
  getFilterRequest,
  deleteRequest,
} from '../index';


export const signUpAPI = (payload) => postWithFormRequest(`/user/sign-up`, payload);
export const signIn = (payload) => postWithFormRequest(`/user/login`, payload);
export const checkEmail = (payload) => postWithFormRequest(`/check-email`, payload);
export const checkPhone = (payload) => postWithFormRequest(`/check-phone`, payload);
export const checkUserName = (payload) => postWithFormRequest(`/check-username`, payload);
export const getAllFreinds = (payload) => getRequest(`/get-all-friends`, payload);

