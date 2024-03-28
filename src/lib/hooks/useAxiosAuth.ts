"use client";
import { axiosAuth } from "@/lib/axios";
import { useEffect } from "react";

const useAxiosAuth = () => {
  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    const requestIntercept = axiosAuth.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axiosAuth.interceptors.request.eject(requestIntercept);
    };
  }, []);

  return axiosAuth;
};

export default useAxiosAuth;