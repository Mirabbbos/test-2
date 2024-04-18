import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.itv.uz/",
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});

export default instance;    