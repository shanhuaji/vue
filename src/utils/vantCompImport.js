import Vue from "vue";
import {
  Button,
  Icon,
  TreeSelect,
  Sidebar,
  SidebarItem,
  Lazyload,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Sku,
  SubmitBar,
  SwipeCell,
  Card,
  Toast,
  Form,
  Field,
  Uploader,
  Swipe,
  SwipeItem,
  
} from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Uploader);
Vue.use(Field);
Vue.use(Form);
Vue.use(Toast);
Vue.use(Card);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Sidebar);
Vue.use(SubmitBar);
Vue.use(SwipeCell);

Vue.use(SidebarItem);

Vue.use(TreeSelect);
Vue.use(Lazyload, {
  lazyComponent: true,
});
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Sku);
