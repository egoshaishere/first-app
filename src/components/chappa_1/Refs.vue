<template>
  <div class="refs">
    <div class="refs__title">REFS</div>
    <h2 ref="header">Hello world!</h2>
    <button v-on:click="change">Change</button>
  </div>
</template>

<script>
export default {
  name: "Refs",
  methods: {
    change: function () {
      this.$refs.header.innerText = "Welcome to Vue.js";
    },
  },
};
</script>

<style>
.refs {
  margin: 20px;
  border: 2px solid rgb(33, 39, 6);
  border-radius: 30px;
  padding: 20px;
}
.refs__title {
  display: flex;
  justify-content: center;
  color: rgb(33, 39, 6);
  margin: 15px;
}
</style>