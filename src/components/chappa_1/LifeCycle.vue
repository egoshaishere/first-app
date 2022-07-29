<template>
  <div class="lifecycle">
    <div class="lifecycle__title">Lifecycle</div>
    <h2>{{ message }}</h2>
    <button v-on:click="message = 'Updated'">Update</button>
    <button v-on:click="destroy">Destroy</button>
  </div>
</template>

<script>
export default {
  name: "Lifecycle",
  data() {
    return {
      message: "Welcome to Vue.js",
    };
  },
  methods: {
    destroy: function () {
      this.$destroy();
    },
  },
  beforeCreate: function () {
    console.log("beforeCreate()");
  },
  created: function () {
    console.log("created()");
  },
  beforeMount: function () {
    console.log("beforeMount()");
  },
  mounted: function () {
    console.log("mounted()");
  },
  beforeUpdate: function () {
    console.log("beforeUpdate()");
  },
  updated: function () {
    console.log("updated()");
  },
  beforeDestroy: function () {
    console.log("beforeDestroy()");
  },
  destroyed: function () {
    console.log("destroyed()");
  },
};
</script>

<style>
.lifecycle {
  margin: 20px;
  border: 2px solid rgb(111, 0, 255);
  border-radius: 30px;
  padding: 20px;
}
.lifecycle__title {
  display: flex;
  justify-content: center;
  color: rgb(111, 0, 255);
  margin: 15px;
}
</style>