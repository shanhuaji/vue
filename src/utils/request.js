import axios from "axios";
import qs from "qs";

import { setCookie /* , getCookie, deCookie  */ } from "./cookie";

setCookie("na", "shan", 7);
const ins = axios.create({
  /*  baseURL: "", */
  timeout: 4000,
});

/* 统一设置请求头 */
ins.defaults.headers.post["Content-Type"] = "application/josn";
/* 提取器 */
ins.interceptors.request.use(
  function(config) {
    /* token携带 */
    /*  const token = getCookie("token");
    config.headers.common["token"] = token; */
    return config;
  },
  function(err) {
    return Promise.reject(err);
  }
);
/* 拦截器 */
ins.interceptors.response.use(
  function(res) {
    return res;
  },
  function(err) {
    return Promise.reject(err);
  }
);

/* url 地址 method默认get  默认传输方式json data发送的数据 */
export default function request(options) {
  const {
    url,
    method = "get",
    headers = {
      "Content-Type": "application/json",
    },
    data,
  } = options;

  switch (method.toUpperCase()) {
    case "GET":
      return ins.get(url, { params: data });
      break;
    case "POST":
      switch (headers["Content-Type"]) {
        case "application/json":
          return ins.post(url, data, { headers });
          break;
        case "application/x-www-form-urlencoded":
          return ins.post(url, qs.stringify(data), { headers });
          break;
        case "multipart/form-data":
          let p = new FormData();
          for (let prop in data) {
            p.append(prop, data[prop]);
          }

          return ins.post(url, p, { headers });
          break;
        default:
          return ins.post(url, data);
          break;
      }
      break;
    default:
      return ins(options);
      break;
  }
}
