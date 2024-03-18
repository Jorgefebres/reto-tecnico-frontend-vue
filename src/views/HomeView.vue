<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="">
      <h1 class="mb-5">Bienvenido</h1>
      <button class="btn btn-info text-white" @click="goToRedditEntries">
        Ver las 50 entradas principales de Reddit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  methods: {
    goToRedditEntries() {
      this.$router.push({ name: "no-entry-selected" });
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
}
</style>
