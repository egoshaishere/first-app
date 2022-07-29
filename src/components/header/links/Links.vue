<template>
  <div>
    <nav>
      <NavLink to="/" text="Главная" /> |
      <NavLink to="/chappa_1" text="Глава 1" /> |
      <NavLink to="/chappa_4" text="Глава 4" />
    </nav>
  </div>
</template>

<script>
import NavLink from "./NavLink.vue";

export default {
  name: "Links",
  components: {
    NavLink,
  },
};
</script>

<style>
</style>