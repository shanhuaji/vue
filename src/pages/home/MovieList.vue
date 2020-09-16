<template>
  <div class="bottom">
    <div class="content">
      <div
        class="list"
        v-for="item in movieList"
        :key="item.id"
        @click="clickHandler"
      >
        <img :src="item.img | imgFilter" />
        <div class="content">
          <p>{{ item.nm }}</p>
          <p>观众评{{ item.sc }}</p>
          <span>{{ item.star }}</span>
          <p>{{ item.showInfo }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import { Toast } from "vant";
import _ from "loadsh";
BScroll.use(Pullup);
export default {
  computed: {
    ...mapState("homeStore", {
      movesId: (state) => state.movesId,
      movieList: (state) => state.movieList,
    }),
  },
  methods: {
    ...mapActions("homeStore", ["getMovesID", "getMoves"]),
    clickHandler() {
      this.$router.push("/category");
    },
  },
  mounted() {
    let oBottom = document.querySelector(".bottom");
    let bs = new BScroll(oBottom, {
      click: true /* 事件穿透 */,
      // pullUpLoad: true /* 上拉加载 */,
      pullUpLoad: {
        threshold: 90 /* 上拉阀值 */,
      },
    });
    /* 上拉加载事件 */
    let count = 0;
    bs.on("pullingUp", async () => {
      let newArr = this.movesId.slice(12);
      bs.finishPullUp();
      if (count < _.chunk(newArr, 10).length) {
        await this.getMoves(_.chunk(newArr, 10)[count].join(","));
        bs.refresh();
        count++;
      } else {
        Toast.loading({
          message: "更多精彩影片等待上映...",
          forbidClick: true,
        });
      }
    });

    // bs.on("pullingUp", () => {
    //   /* 上拉结束后继续执行 */
    //   bs.finishPullUp();
    //   let newArr = this.movesId.slice(12);
    /* if (count == 1) {
        Toast.loading({
          message: "加载中...",
          forbidClick: true,
        });
      } */

    //   if (count < _.chunk(newArr, 10).length) {
    //     this.getMoves(_.chunk(newArr, 10)[count].join(","));
    //     bs.refresh();
    //     count++;
    //   } else if (count == _.chunk(newArr, 10).length) {
    //     bs.refresh(); /* 加载最后三条 */
    //     count++;
    //   } else {
    //     Toast.loading({
    //       message: "更多精彩影片等待上映...",
    //       forbidClick: true,
    //     });
    //   }
    // });
    this.getMovesID();
  },
};
</script>
<style lang="scss" scoped>
.bottom {
  flex: 1;
  overflow: hidden;
  height: 100%;
  .content {
    .list {
      width: 100%;
      height: 160px;

      display: flex;
      padding: 10px 0px;
      img {
        width: 120px;
        height: 160px;
      }
      .content {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        p {
          font-size: 14px;
        }
        span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
