const Home = () => import(/* webpackChunkName: "group-foo" */ "Pages/home");
const Car = () => import(/* webpackChunkName: "group-foo" */ "Pages/car");
const Category = () =>
  import(/* webpackChunkName: "group-foo" */ "Pages/category");
const Detail = () => import(/* webpackChunkName: "group-foo" */ "Pages/detail");
const List = () => import(/* webpackChunkName: "group-foo" */ "Pages/list");
const User = () => import(/* webpackChunkName: "group-foo" */ "Pages/user");
const Login = () =>
  import(/* webpackChunkName: "group-foo" */ "Pages/user/Login");
const Register = () =>
  import(/* webpackChunkName: "group-foo" */ "Pages/user/Register");
const Activity = () =>
  import(/* webpackChunkName: "group-foo" */ "Pages/activity");
const NotFound = () => import(/* webpackChunkName: "group-foo" */ "Pages/404");
const Pay = () => import(/* webpackChunkName: "group-foo" */ "Pages/pay");
const First = () =>
  import(/* webpackChunkName: "group-foo" */ "Pages/activity/first");
const Last = () =>
  import(/* webpackChunkName: "group-foo" */ "Pages/activity/last");
import router from "Router";
export default [
  {
    path: "/",
    rediect: "/home",
  },
  {
    path: "/pay",
    component: Pay,
    meta: {
      title: "购物车结算",
    },
  },
  {
    path: "/home",
    component: Home,
    meta: {
      title: "首页",
    },
  },
  {
    path: "/car",
    component: Car,
    meta: {
      title: "购物车",
    },
  },
  {
    path: "/category",
    component: Category,
    name: "category",
  },
  {
    path: "/detail",
    component: Detail,
    name: "detail",
    meta: {
      title: "商品详情页",
    },
  },
  {
    path: "/list",
    component: List,
    name: "list",
    meta: {
      title: "商品列表",
    },
  },
  {
    path: "/user",
    component: User,
    meta: {
      title: "个人中心",
    },
  },
  {
    path: "/Login",
    component: Login,
    meta: {
      title: "登录",
    },
  },
  {
    path: "/Register",
    component: Register,
    meta: {
      title: "注册",
    },
  },
  {
    path: "/activity",
    component: Activity,
    meta: {
      title: "9.9元包邮",
    },
    children: [
      {
        path: "first/:id",
        component: First,
        name: "first",
      },
    ],
    /* beforeEnter: (to, from, next) => {
      if (to.path == "/activity") {
        router.push("/login");
        console.log(11111);
      } else {
        console.log(2222);
      }
    }, */
  },
  {
    /* 404 */
    path: "*",
    component: NotFound,
  },
];
