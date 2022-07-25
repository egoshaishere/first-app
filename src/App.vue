<template>
  <div id="app">
    <div>APP</div>
    <img alt="Vue logo" src="./assets/logo.png">
    <RootComp msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import RootComp from './components/RootComp.vue'

export default {
  name: 'App',
  components: {
    RootComp
  }
}
</script>

<style>
#app {

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-top: 60px;
  border: 2px solid pink;
  border-radius: 50px;
  padding: 20px;
}
</style>
