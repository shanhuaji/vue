<template>
<!-- 商品页面 -->
  <div class="box" v-swipeleft="forward" v-swiperight="back">
    <div class="btn">
      <van-button type="primary" @click="getHot">人气</van-button>
      <van-button type="info" @click="getLatest">最新</van-button>
      <van-button type="warning" @click="getSell">销量</van-button>
      <van-button type="danger" @click="getPrice">价格</van-button>
    </div>
    <div class="imgall">
      <ul v-for="(item, index) of list" :key="index">
        <li class="imgli"><img :src="item.pic" alt="" /></li>
        <!-- 跳转至列表页 -->
        <!-- ...item所有数据都添加到query中 方便使用 -->
        <router-link
          tag="li"
          :to="{ path: 'detail', query: { id: item.id, r: 'p/d' ,...item} }"
          class="mation"
        >
          <h6>{{ item.d_title }}</h6>
          <i>￥{{ item.jiage }}</i>
          <em>{{ item.rank_num }}</em>
          <em>{{ item.cate_name }}</em>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      px: "t",
    };
  },
  computed: {
    ...mapState("carStore", {
      list: (state) => state.list,
    }),
    },
  methods: {
      
    ...mapActions("carStore", ["listCars"]),
    /* 点击切换px */
    getHot() {
      this.px = "t";
    },
    getLatest() {
      this.px = "latest";
    },
    getSell() {
      this.px = "sell";
    },
    getPrice() {
      this.px = "price";
    },
  },
  watch: {
    /* 监听px */
    px() {
      const {
        query: { r, cid },
      } = this.$route;
      this.listCars({
        r,
        page: 1,
        cid,
        px: this.px,
        cac_id: "",
      });
    },
  },
  mounted() {
    let {
      query: { r, cid },
    } = this.$route;
    this.listCars({
      r: "class/cyajaxsub",
      page: "1",
      cid,
      px: "t",
      cac_id: "",
    });
  },
};
</script>
<style lang="scss" scoped>
.box {
  flex: 1;
  overflow: auto;
  .btn {
    display: flex;
    .van-button--normal {
      width: 25%;
    }
  }
  .imgall {
    display: flex;
    flex-wrap: wrap;
    ul {
      width: 100%;
      display: flex;
      padding: 5px;
      margin-top: 5px;
      border-bottom: 1px solid rgb(219, 219, 219);
      .imgli {
        img {
          width: 100px;
          height: 100px;
        }
      }
      .mation {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        justify-content: space-between;
        h6 {
          font-size: 16px;
        }
        i {
          font-size: 16px;
        }
        em {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
