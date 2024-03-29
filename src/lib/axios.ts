'use client';

import axios from "axios";
const BASE_URL = "https://dummyjson.com";

export const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: {"Content-Type": "application/json"},
});

axiosAuth.interceptors.request.use(
  (config) => {
    if (!config.headers["Authorization"] && localStorage.getItem('access_token')) {
      config.headers["Authorization"] = `Bearer ${localStorage.getItem('access_token')}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);