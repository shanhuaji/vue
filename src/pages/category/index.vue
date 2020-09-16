<template>
  <van-tree-select
    height="100%"
    :items="cate"
    :main-active-index.sync="active"
   
    v-swiperight="back"
  >
    <template #content>
      <div class="box"  v-swipeleft="forward">
        <div v-for="item in cate[active].floors" :key="item.cid" class="list">
          <h3>{{ item.name }}</h3>
          <ul>
            <router-link
              tag="li"
              :to="{
                path: 'list',
                query: {
                  cid: i.api_cid,
                  r: 'class/cyajaxsub',
                },
              }"
              v-for="i in item.list"
              :key="i.api_id"
            >
              <img :src="i.img" alt="" />
              <span>{{ i.name }}</span>
            </router-link>
          </ul>
        </div>
      </div>
    </template>
  </van-tree-select>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      active: 0,
      items: [],
    };
  },
  computed: {
    ...mapState("carStore", {
      cate: (state) => state.cate,
    }),
  },
  methods: {
    ...mapActions("carStore", ["getNumber"]),
  },
  mounted() {
    this.getNumber();
  },
};
</script>
<style lang="scss">
.van-tree-select__nav {
  flex: 0.6;
  height: 100%;
}
.van-tree-select {
  overflow: hidden;
  text-align: center;
}
.box {
  width: 100%;
  height: 100%;
  .list {
    overflow: hidden;
    margin-top: 10px;
    h3 {
      margin-top: 10px;
    }
    ul {
      float: left;

      li {
        width: 80px;
        height: 80px;
        float: left;

        margin: 5px 7px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        img {
          width: 60px;
          height: 60px;
        }
      }
    }
  }
}
</style>
