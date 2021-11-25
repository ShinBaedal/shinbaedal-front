import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({ baseURL: "http://49.50.172.207" });

export default instance;
