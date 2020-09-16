<template>
  <header>
    <!-- 详情页 -->
    <van-icon name="arrow-left" v-show="bool" @click="leftHandler"/>
    <h3>{{$route.meta.title}}</h3>
    <van-icon name="ellipsis" v-show="bool" @click="rightHandler"/>
  </header>
</template>
<script>
export default {
  name: "Tab",
  data() {
    return {
      bool: true,
    };
  },
  methods: {
    leftHandler(){
      console.log('左边');
      this.$router.back()
    },
    rightHandler(){
      console.log('右边');
    }
  },
  watch: {
    $route() {
     /* 判断路径  添加标题 */
      let { path } = this.$route;
      if (path == "/home") {
        this.bool = false;
      }else{
        this.bool = true;
      }
    },
  },
};
</script>
<style lang="scss">
header {
  height: 55px;
  background: #e54847;
  padding: 0px 15px!important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: #fff;
  h3 {
    width: 100vw;
    text-align: center;
  }
}
</style>
