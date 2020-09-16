<template>
  <div class="box" v-swipeleft="forward" v-swiperight="back">
    <div class="one" v-if="bool">
      <img :src="img" alt="" /><span>{{ username }}</span>
      <button>注销</button>
    </div>
    <div class="noone" v-else>
      <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
      <router-link to="./register">注册</router-link>
      <span>/</span>
      <router-link to="/login">登录</router-link>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { getCookie, setCookie } from "Utils/cookie";
export default {
  data() {
    return {
      user: "",
      pass: "",
      img: "",
      username: "",
      bool : false
    };
  },
  computed: {
    userInfo() {
      return {
        username: getCookie("username"),
      };
    },
    ...mapState("userStore", {
      users: (state) => state.users,
    }),
  },
  mounted() {
    this.img = getCookie("img");
    this.username = getCookie("username");
    if(getCookie("username")){
      this.bool = true
    }else{
      this.bool = false
    }
  },
  methods: {
    ...mapActions("userStore", ["login"]),
    clickHandler() {
      this.login({
        username: this.user,
        password: this.pass,
      });
    },
  },
};
</script>
<style lang="scss" scope>
.box {
  flex: 1;

  .one {
    width: 80vw;
    height: 20vh;

    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    span {
      display: block;
      width: 140px;

      margin-left: -20px;
      margin-top: -40px;
      font-size: 30px;
    }
    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>
