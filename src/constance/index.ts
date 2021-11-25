import instance from "../utils/api/axios";

export const setToken = (token: string) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
