import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create();

instance.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    const access_token = localStorage.getItem("access_token");
    config.headers!["Authorization"] = `Bearer ${access_token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
