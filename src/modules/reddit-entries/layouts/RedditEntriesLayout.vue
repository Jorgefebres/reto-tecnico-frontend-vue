<template>
  <Navbar />
  <div class="col-5">
    <EntryList />
  </div>
  <div class="col"><router-view /></div>
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Navbar: defineAsyncComponent(() => import("../components/Navbar.vue")),
    EntryList: defineAsyncComponent(() =>
      import("../components/EntryList.vue")
    ),
  },
};
</script>

<style scoped></style>
