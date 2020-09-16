<template>
  <div class="middle" v-swipeleft="forward" v-swiperight="back">
    <div>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="home-content">
      <movie-list></movie-list>
    </div>
  </div>
</template>
<script>
import MovieList from "./MovieList";
export default {
  name: "Home",
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600181274046&di=0038f5f4197d6a696b433d155641739b&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F55%2F22%2F20300000929429130630222900050.jpg",
      ],
    };
  },
  components: {
    MovieList,
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.middle {
  display: flex;
  flex: 1;
  width: 100%;
  overflow: auto;
  flex-direction: column;
  height: 100px;
  .home-content{
    flex: 1;
    height: 100%;
    overflow: hidden;
  }
  li {
    width: 100px;
    height: 100px;
    background: red;
  }
}
.van-swipe {
  width: 100%;
  height: 200px;
  img {
    width: 100%;
    height: 200px;
  }
}
</style>
