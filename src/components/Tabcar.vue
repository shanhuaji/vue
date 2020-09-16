<template>
  <footer v-show="bool">
    <ul>
      <router-link
        tag="li"
        :to="item.path"
        v-for="item of tabBars"
        :key="item.id"
        active-class="active"
      >
        <van-icon :name="item.iconName" />
        <i>{{ item.text }}</i>
      </router-link>
    </ul>
  </footer>
</template>
<script>
export default {
  name: "Tabcar",
  data() {
    return {
      bool: true,

      tabBars: [
        {
          id: "1",
          text: "首页",
          iconName: "wap-home-o",
          path: "/home",
        },
        {
          id: "2",
          text: "分类",
          iconName: "apps-o",
          path: "/category",
        },
        {
          id: "3",
          text: "活动",
          iconName: "cash-back-record",
          path: "activity",
        },
        {
          id: "4",
          text: "购物车",
          iconName: "shopping-cart-o",
          path: "car",
        },
        {
          id: "5",
          text: "我的",
          iconName: "user-circle-o",
          path: "user",
        },
      ],
    };
  },
  watch: {
    $route() {
      /* 判断详情页 */
      let { path } = this.$route;
      if (path == "/detail" || path == '/pay') {
        this.bool = false;
      } else {
        this.bool = true;
      }
    },
  },
  
};
</script>
<style lang="scss">
footer {
  border-top: 1px solid #ccc;
  height: 48px;
  width: 100%;
  ul {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      &.active {
        color: red;
      }
      i {
        margin-top: 3px;
      }
    }
  }
  .van-info {
    width: 2rem;
  }
}
</style>
