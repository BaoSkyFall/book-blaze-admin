'use client';

import axios, { AxiosError } from 'axios';
import { useAppDispatch } from './hooks/useAppDispatch';
import { logOut } from './features/session-slice';
const BASE_URL = 'https://dummyjson.com';

export const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

axiosAuth.interceptors.request.use(
  (config) => {
    if (
      !config.headers['Authorization'] &&
      localStorage.getItem('access_token')
    ) {
      config.headers['Authorization'] =
        `Bearer ${localStorage.getItem('access_token')}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosAuth.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const dispatch = useAppDispatch();
    if ([401, 403].includes(error.response?.status ?? 0)) {
      dispatch(logOut());
    }
  },
);
