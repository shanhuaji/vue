<template>
  <!-- 详情页 -->
  <div class="box" v-swipeleft="forward" v-swiperight="back">
    <!-- 加入购物车底栏 -->
    <div v-html="details.data" class="content" v-cloak></div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        badge="5"
        @click="goCar"
      />
      <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="shopHandler"
      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="shopHandler"
      />
    </van-goods-action>
    <!-- SKU -->
    <van-sku
      v-model="show"
      :goods-id="goodsId"
      stepper-title="我要买"
      :quota-used="quotaUsed"
      :sku="sku"
      :goods="goods"
      :quota="quota"
      :hide-stock="sku.hide_stock"
      show-add-cart-btn
      reset-stepper-on-hide
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
      @stepper-change="changeNum"
    >
    </van-sku>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { getCookie } from "Utils/cookie";
import { Toast } from "vant";
export default {
  name: "Detail",
  data() {
    return {
      quotaUsed: 0,
      quota: 100,
      goodsId: this.goodsId,
      show: false,
      num: 1,
      /*  goodsId:this.$store.data.goodsId, */
      pic: "",
      sku: {
        // 数据结构见下方文档
      },
      goods: {
        // 数据结构见下方文档
      },
    };
  },
  computed: {
    ...mapState("carStore", {
      details: (state) => state.details,
      addshop: (state) => state.addshop,
    }),
  },
  methods: {
    ...mapActions("carStore", ["detailCars", "getaddCar"]),
    shopHandler() {
      this.show = true;
    },
    changeNum(value) {
      this.num = value;
    },
    /* 第二次立即购买 */
    onBuyClicked() {
      
      this.$router.push({
        path: "/pay",
        query: {
          num: this.num,
          ...this.$route.query,
        },
      });
    },
    goCar() {
      /* 跳转到购物车 */
      this.$router.push({
        path: "/car",
      });
    },
    /* 第二次加入购物车 */
    async onAddCartClicked() {
      console.log(111111);
      let token = getCookie("token");
      let {
        pic,
        jiage,
        goodsid,
        d_title,
        yuanjia,
        xiaoliang,
        comment,
      } = this.$route.query;
      this.pic = pic;
      /* 加入购物车接口 */
      await this.getaddCar({
        imgUrl: pic,
        d_title,
        price: jiage,
        oringinal: yuanjia,
        sales: xiaoliang,
        comment,
        num: this.num,
        token,
        shopId: goodsid,
      });

      let { status } = this.addshop.payload.data;
      if (status == 1) {
        Toast.success("加入成功");
      } else {
        Toast.fail("请勿重复添加");
      }
    },
  },

  mounted() {
    let { id, r, pic, jiage } = this.$route.query;

    this.pic = pic;
    this.detailCars({ id, r });
    this.sku = {
      tree: [
        {
          k: "颜色", // skuKeyName：规格类目名称
          k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          v: [
            {
              id: "1", // skuValueId：规格值 id
              name: "红色", // skuValueName：规格值名称
              imgUrl: this.pic, // 规格类目图片，只有第一个规格类目可以定义图片
              previewImgUrl: this.pic, // 用于预览显示的规格类目图片
            },
            {
              id: "2",
              name: "蓝色",
              imgUrl: this.pic,
              previewImgUrl: this.pic,
            },
          ],
          largeImageMode: true, //  是否展示大图模式
        },
      ],
      // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
      list: [
        {
          id: 2259, // skuId
          s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
          s2: "1", // 规格类目 k_s 为 s2 的对应规格值 id
          price: jiage * 100, // 价格（单位分）
          stock_num: 110, // 当前 sku 组合对应的库存
        },
        {
          id: 2259, // skuId
          s1: "2", // 规格类目 k_s 为 s1 的对应规格值 id
          s2: "2", // 规格类目 k_s 为 s2 的对应规格值 id
          price: jiage * 100, // 价格（单位分）
          stock_num: 110, // 当前 sku 组合对应的库存
        },
      ],
      price: jiage, // 默认价格（单位元）
      stock_num: 227, // 商品总库存
      collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
      none_sku: false, // 是否无规格商品
    };
    this.goods = {
      // 默认商品 sku 缩略图
      picture: this.pic,
    };
  },
  watch: {
    $route() {
      let { id, r, pic, jiage } = this.$route.query;
      this.pic = pic;
      this.detailCars({ id, r });
      this.sku = {
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: "1", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl: this.pic, // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: this.pic, // 用于预览显示的规格类目图片
              },
              {
                id: "2",
                name: "蓝色",
                imgUrl: this.pic,
                previewImgUrl: this.pic,
              },
            ],
            largeImageMode: true, //  是否展示大图模式
          },
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1", // 规格类目 k_s 为 s2 的对应规格值 id
            price: jiage * 100, // 价格（单位分）
            stock_num: 110, // 当前 sku 组合对应的库存
          },
          {
            id: 2259, // skuId
            s1: "2", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "2", // 规格类目 k_s 为 s2 的对应规格值 id
            price: jiage * 100, // 价格（单位分）
            stock_num: 110, // 当前 sku 组合对应的库存
          },
        ],
        price: jiage, // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
      };
      this.goods = {
        // 默认商品 sku 缩略图
        picture: this.pic,
      };
    },
  },
  updated() {},
};
</script>
<style lang="scss">
header {
  padding: 0px;
}
.box {
  overflow: auto;
  width: 100vw;
  flex: 1;
  .content {
    width: 100%;
  }
}
.van-goods-action {
  z-index: 999;
}
.van-info {
  width: 2rem;
  height: 15px;
  border-radius: 20px;
}
.icon_header {
  display: none;
}
</style>
