<template>
  <div v-swipeleft="forward" v-swiperight="back">
    <!-- 商品结算页 -->
    <van-swipe-cell>
      <van-card
        :num="cars.num"
        :price="cars.jiage"
        :title="cars.d_title"
        class="goods-card"
        :thumb="cars.pic"
      />
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>

    <van-submit-bar :price="3050" button-text="提交订单" />
  </div>
</template>
<script>
export default {
  name: "Pay",
  data() {
    return {
      arr: {},
    };
  },
  computed: {
    cars() {
      console.log(this.$route.query);
      return this.$route.query;
    },
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
