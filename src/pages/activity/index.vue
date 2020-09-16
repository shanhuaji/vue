<template>
  <div v-swipeleft="forward" v-swiperight="back">
    activity
    <!-- <router-link to="/activity/last">last</router-link> -->

    <br />

    <router-link
      :to="{
        name: 'first',
        params: {
          id: 17,
        },
      }"
      >1111111111</router-link
    >
    <router-link
      :to="{
        name: 'first',
        params: {
          id: 22,
        },
      }"
      >2222222222</router-link
    >
    <router-view></router-view>
  </div>
</template>
<script>
export default {
 
};
</script>
<style lang="scss" scoped>
div {
  flex: 1;
}
</style>
