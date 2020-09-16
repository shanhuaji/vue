import request from "Utils/request";
import { getCookie } from "Utils/cookie";
const token = getCookie("token");
import {
  loginURL,
  cateURL,
  addCarURL,
  getShopURL,
  delShopURL,
  registerURL,
  picURL,
  tokenURL,
  moveListUrl,
  moreComingUrl,
  lstUrl
} from "./url";
/* import {getCookie} from 'Utils/cookie'

const token = getCookie('token') */
/* 登录 */
export function loginReq(data) {
  return request({
    url: loginURL,
    data,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}
/* 注册 */
export function registerReq(data) {
  return request({
    url: registerURL,
    method: "POST",
    data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}
/* 图片 */
export function picReq(file) {
  return request({
    url: picURL,
    data: {
      file,
    },
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
/* token */
export function tokenReq() {
  return request({
    url: tokenURL,
    data: {
      token,
    },
  });
}
/* 分类 */
export function cateReq() {
  return request({
    url: cateURL,
    data: {
      r: "class/category",
      type: 1,
    },
    method: "GET",
  });
}

/* 列表 */
export function listReq(data) {
  return request({
    url: cateURL,
    data,
  });
}
/* 详情 */
export function detailReq(data) {
  return request({
    url: cateURL,
    data,
  });
}
/* 添加到购物车 */
export function addCarReq(data) {
  return request({
    url: addCarURL,
    data,
    method: "POST",
  });
}

/* 获取购物车的内容 */
export function getShopReq() {
  return request({
    url: getShopURL,
    data: {
      token,
    },
  });
}

/* 删除购物车 */
export function delShopReq(shopId) {
  return request({
    url: delShopURL,
    data: {
      token,
      shopId,
    },
    method: "POST",
  });
}
/* 猫眼 */
export function moveListReq() {
  return request({
    url: moveListUrl,
    data: {
      token: "",
      optimus_uuid:
        "D13EA7A0F10B11EABD4215E4751D50F5A7879F3720DC4D4E93BC5CA52BBE0BD3",
      optimus_risk_level: 71,
      optimus_code: 10,
    },
  });
}
/* ID */
export function moreComingReq(movieIds) {
  return request({
    url: moreComingUrl,
    data: {
      token: "",
      movieIds,
      optimus_uuid:
        "D13EA7A0F10B11EABD4215E4751D50F5A7879F3720DC4D4E93BC5CA52BBE0BD3",
      optimus_risk_level: 71,
      optimus_code: 10,
    },
  });
}
/* 人气商品 */
export function lstReq(cid){
  
  return request({
    url:lstUrl,
    data:{
      cid
    }
  })
}