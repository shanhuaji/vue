import {
  cateReq,
  listReq,
  detailReq,
  addCarReq,
  getShopReq,
  delShopReq,
  lstReq
} from "Api";

/* const token = getCookie('token') */
// import { delete } from 'vue/types/umd'

export default {
  namespaced: true,
  state: {
    cate: [],
    list: [],
    details: [],
    addshop: [],
    getshop: [],
    delshop: [],
    lst:[]
  },
  actions: {
    async getNumber({ commit }) {
      commit({
        type: "GET_NUMBER",
        num: await cateReq(),
      });
    },
    /* 列表 */
    async listCars({ commit }, payload) {
      commit({
        type: "LIST_CARS",
        payload: await listReq(payload),
      });
    },
    /* 详情 */
    async detailCars({ commit }, payload) {
      commit({
        type: "DETAIL_CARS",
        payload: await detailReq(payload),
      });
    },
    /* 加入购物车 */
    async getaddCar({ commit }, payload) {
      commit({
        type: "GETADD_CAR",
        payload: await addCarReq(payload),
      });
    },
    /* 获取购物车 */
    async getshopCars({ commit }, payload) {
      commit({
        type: "GETSHOP_CARS",
        payload: await getShopReq(payload),
      });
    },
    /* 删除 */
    async delshopCars({ commit }, payload) {
      commit({
        type: "DELSHOP_CARS",
        payload: await delShopReq(payload),
      });
    },
    /* 人气商品 */
    async lstCars({commit},payload){
    /*   console.log('payload'+payload); */
      commit({
        type:'LST_CARS',
        payload:await lstReq(payload)
      })
    }
  },
  mutations: {
    GET_NUMBER(state, { num }) {
      state.cate = num.data.data.data.map((item) => {
        item.text = item.name;
        delete item.name;
        return item;
      });
    },
    /* 列表 */
    LIST_CARS(state, { payload }) {
      state.list = payload.data.data.content;
    },
    /* 详情 */
    DETAIL_CARS(state, { payload }) {
      state.details = payload;
    },
    /* 加入购物车 */
    GETADD_CAR(state, payload) {
      state.addshop = payload;
    },
    /* 获取购物车 */
    GETSHOP_CARS(state, { payload }) {
      state.getshop = payload.data.data;
    },
    /* 删除购物车 */
    DELSHOP_CARS(state, { payload }) {
      state.delshop = payload;
    },
    /* 人气商品 */
    LST_CARS(state,{payload}){
      let {data} = payload.data
      state.lst = data.content
      console.log(state.lst);
    }
  },
};
