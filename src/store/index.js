import Vue from 'vue'
import Vuex from 'vuex'
import homeStore from 'Pages/home/store.js'
import userStore from 'Pages/user/store.js'
import carStore from './car'
Vue.use(Vuex)

let store = new Vuex.Store({
    modules:{
        /* 分为首页 购物车 登录模块 */
        homeStore,carStore,userStore
    },
 
})

export default store