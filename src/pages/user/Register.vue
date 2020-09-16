<template>
  <div class="box" v-swipeleft="forward" v-swiperight="back">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-uploader v-model="fileList" :after-read="afterRead" max-count="1" />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="phone"
        type="phone"
        name="phone"
        label="手机号码"
        placeholder="手机号码"
        :rules="[
          { required: true, message: '手机号不能为空' },
          { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！' },
        ]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: "",
      phone: "",
      fileList: [],
    };
  },
  computed: {
    ...mapState("userStore", {
      pic: (state) => state.pic,
      setInform: (state) => state.setInform,
    }),
  },
  methods: {
    ...mapActions("userStore", ["getPic", "Inform"]),
    /* 注册 */
    onSubmit(values) {
     this.Inform(values)
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      this.getPic(file.file);
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  flex: 1;
  overflow: auto;
}
</style>
