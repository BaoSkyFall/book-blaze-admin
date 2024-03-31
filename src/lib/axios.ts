'use client';

import axios, { AxiosError } from 'axios';
import { NAVIGATION_LINK } from '@/enums/navigation.enum';
const BASE_URL = 'https://dummyjson.com';

export const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

axiosAuth.interceptors.request.use(
  (config) => {
    if (
      !config.headers['Authorization'] &&
      localStorage.getItem(process.env.NEXT_PUBLIC_NAME_TOKEN ?? 'access_token')
    ) {
      config.headers['Authorization'] =
        `Bearer ${localStorage.getItem(process.env.NEXT_PUBLIC_NAME_TOKEN ?? 'access_token')}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosAuth.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if ([401, 403].includes(error.response?.status ?? 0)) {
      localStorage.removeItem(
        process.env.NEXT_PUBLIC_NAME_TOKEN ?? 'access_token',
      );
      window.location.href = NAVIGATION_LINK.LOGIN;
    }
  },
);
