import axios from "axios";

export const instance = axios.create({
  baseURL: "https://vocab-builder-backend.p.goit.global/api",
});
export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clear = () => {
  instance.defaults.headers.common.Authorization = ``;
};
