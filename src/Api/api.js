import axios from "axios";

export const instance = axios.create({
  baseURL: "https://vocab-builder-backend.p.goit.global/api",
});
