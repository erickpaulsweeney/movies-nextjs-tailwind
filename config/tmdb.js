import axios from "axios";
import { API_KEY, BASE_URL } from "./constants";

const tmdbAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default tmdbAPI;