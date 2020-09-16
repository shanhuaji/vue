<template>
  <div v-swipeleft="forward" v-swiperight="back">
    <!-- 商品结算页 -->
    <van-swipe-cell v-for="item of getshop" :key="item.shopId">
      <van-card
        :num="item.num"
        :price="item.price * item.num"
        :title="item.d_title"
        class="goods-card"
        :thumb="item.imgUrl"
      />
      <template #right>
        <van-button
          square
          text="删除"
          type="danger"
          class="delete-button"
          @click="removeHandler(item.shopId)"
        />
      </template>
    </van-swipe-cell>
    <van-submit-bar
      :price="allPrice"
      button-text="提交订单"
      @submit="onSubmit"
    />
  </div>
</template>
<script>
import { getCookie } from "Utils/cookie";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  name: "Car",
  methods: {
    onSubmit() {},
    removeHandler(shopId) {
      this.delshopCars(shopId);
      /* 找到点击对应的下标 删除 */
      let index = this.getshop.findIndex((item) => {
        return item.shopId == shopId;
      });
      this.getshop.splice(index, 1);
    },
    ...mapActions("carStore", ["getshopCars", "delshopCars"]),
  },
  computed: {
    ...mapState("carStore", {
      getshop: (state) => state.getshop,
      delshop: (state) => state.delshop,
    }),
    /* 总价格 */
    allPrice() {
      let num = 0;
      console.log(this.getshop);
      this.getshop.forEach((item) => {
        num += item.price * item.num;
      });
      return num * 100;
    },
  },

  mounted() {
    let token = getCookie("token");
    this.getshopCars(token);
  },
};
</script>

<style lang="scss" scoped>
div {
  flex: 1;
  overflow: auto;
}
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
</style>
