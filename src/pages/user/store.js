import { loginReq, registerReq, picReq } from "Api";
import { setCookie } from "Utils/cookie";
import router from "Router";
/* 请求数据 */

export default {
  namespaced: true,
  state: {
    users: {},
    pic: "",
    setInform: {},
    user: "",
  },
  actions: {
    async login({ commit }, { username, password }) {
      console.log(username, password);
      commit({
        type: "LOGIN",
        payload: await loginReq({ username, password }),
      });
    },
    /* 图片 */
    async getPic({ commit }, payload) {
      commit({
        type: "GET_PIC",
        payload: await picReq(payload),
      });
    },
    /* 注册 */
    async Inform({ commit }, payload) {
      this.user = payload.username;
      commit({
        type: "INFORM",
        payload: await registerReq(payload),
      });
    },
  },
  mutations: {
    /* 注册 */
    INFORM(state, { payload }) {
      state.setInform = payload.data;
      if (payload.data.status == 0) {
        console.log("存在");
      } else {
        setCookie("username", this.user, 7);
        router.push("/login");
      }
    },

    /* 图片上传 */
    GET_PIC(state, { payload }) {
      state.pic = payload.data.image_path;
      /* 图片返回成功存cookie */
      if (payload.data.status) {
        let imgUrl = `http://elm.cangdu.org/img/${payload.data.image_path}`;
        setCookie("img", imgUrl, 7);
      }
    },
    /* 登录 */
    LOGIN(state, { payload }) {
      /* 点击登陆设置token */
      /* 登录密码成功跳转到首页 */
      if (payload.data.status == 1) {
        console.log(111111);
        setCookie("token", payload.data.token, 7);
        router.push("/user");
      }
      state.users = payload;
    },
  },
};

console.log("登录模块");
