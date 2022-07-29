<template>
  <div id="app">
    <Header />
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/chappa_1">chappa_1</router-link>|
      <router-link to="/chappa_4">chappa_4</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";
import RootComp from "./components/chappa_1/RootComp.vue";

export default {
  name: "App",
  components: {
    RootComp,
    Header,
  },
};
</script>

<style>
#app {
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 2px solid pink;
  border-radius: 50px;
  /* padding: 20px; */
}
</style>
