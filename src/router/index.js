import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routres'
Vue.use(VueRouter)
const router = new VueRouter({
    mode:'history',
    // routes:[{path:'/home',component:'Home'}] /* 平常格式 */
    routes /* 引入路由表 */
})

export default router