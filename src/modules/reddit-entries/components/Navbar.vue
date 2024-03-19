<template>
  <nav class="navbar bg-info">
    <a class="navbar-brand text-white" @click="$router.push({ name: 'home' })"
      ><img
        src="@/assets/logo.webp"
        alt="reddit logo"
        height="40"
        width="40"
        class="d-inline-block mx-2"
      />50 Entradas Principales</a
    >
  </nav>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
