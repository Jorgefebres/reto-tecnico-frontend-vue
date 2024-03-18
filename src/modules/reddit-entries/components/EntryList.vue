<template>
  <div class="entry-list-container">
    <div class="entry-scrollable-area">
      <h2 v-for="item in 50" :key="item"><Entry /></h2>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Entry: defineAsyncComponent(() => import("./Entry.vue")),
  },
};
</script>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}
.entry-scrollable-area {
  height: 100vh;
  overflow: scroll;
}
</style>
