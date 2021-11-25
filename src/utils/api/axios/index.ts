import axios, { AxiosRequestConfig } from "axios";

const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
const instance = axios.create({ baseURL: `${PROXY}/http://49.50.172.207` });

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
