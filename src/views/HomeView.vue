<template>
  <div>
    <h1>Home</h1>
    <button @click="goToRedditEntries">Ingresar</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  methods: {
    goToRedditEntries() {
      this.$router.push({ name: "reddit-entries" });
    },
  },
};
</script>
