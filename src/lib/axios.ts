import Axios, { AxiosResponse } from 'axios';
import { stringify } from 'qs';
import { API_URL } from '@/config/env/server';

function responseInterceptor(response: AxiosResponse) {
  return response.data;
}

// Server only
export const axios = Axios.create({
  baseURL: API_URL,
  paramsSerializer: stringify,
});

// Client only
export const api = Axios.create({
  baseURL: '/api',
  paramsSerializer: stringify,
});

axios.interceptors.response.use(responseInterceptor);
api.interceptors.response.use(responseInterceptor);
