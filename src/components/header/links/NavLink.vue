<template>
  <router-link v-bind:to=to>{{text}}</router-link>
</template>

<script>
export default {
  name: "NavLink",
  props: ['text', 'to']
};
</script>

<style>
</style>