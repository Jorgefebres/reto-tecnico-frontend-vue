<template>
  <Navbar />
  <div>
    <div><router-view></router-view></div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Navbar: defineAsyncComponent(() => import("../components/Navbar.vue")),
  },
};
</script>
