<template>
  <div id="app">
    <Tab></Tab>
    <router-view></router-view>
    <Tabcar></Tabcar>
  </div>
</template>
<script>
import Tab from "Comp/Tab";
import Tabcar from "Comp/Tabcar";
import Home from "Pages/home";
export default {
  name: "App",
  components: {
    Tab,
    Tabcar,
    Home,
  },

  data() {
    return {
      time: Date.now(),
      test: 1,
    };
  },
};
</script>
<style lang="scss">
@import "Assets/scss/allclear.scss";
body,
html {
  width: 100%;
  height: 100%;
  #app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>
