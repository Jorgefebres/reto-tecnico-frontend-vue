<template>
  <div>
    <h1>Bienvenido</h1>
    <button class="btn btn-primary" @click="goToRedditEntries">
      Ver 50 entradas principales
    </button>
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
