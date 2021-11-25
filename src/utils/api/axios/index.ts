import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({ baseURL: "http://49.50.172.207:3000" });

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
