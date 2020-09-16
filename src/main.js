import Vue from "vue";
import App from "./App.vue";
import store from "Store";
import router from "Router";
import md5 from "md5";
import "Utils/rem";
import "Utils/vantCompImport";
import myPlugin from "Plugins";
Vue.prototype.$md5 = md5;
import "Mixin";

import { tokenReq } from "Api";
/* import axios from 'axios';

Vue.prototype.$http = axios; */

Vue.use(myPlugin);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");

/* 路由守卫 */

// router.beforeResolve(async (to, from, next) => {
//   const {
//     data: { status },
//   } = await tokenReq();
  
//   if (status == 0 || to.path == "/home") {
//     next(false);
//   } else {
//     next(true);
//   }
// });
