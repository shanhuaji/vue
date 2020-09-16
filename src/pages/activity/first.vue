<template>
  <div></div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("carStore", {
      lst: (state) => state.lst,
    }),
  },
  methods: {
    ...mapActions("carStore", ["lstCars"]),
  },
  beforeRouteUpdate(to, form, next) {
    let { id } = this.$route.params;
    this.lstCars(String(id));
    next();
  },
};
</script>
<style lang="scss" scoped></style>
