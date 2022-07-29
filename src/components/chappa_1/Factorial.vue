<template>
  <div>
    <div>Factorial</div>
    <input type="text" v-model="number" />
    <p>Факториал числа {{ number }} равен {{ factorial(number) }}</p>
  </div>
</template>

<script>
export default {
  name: "Factorial",
  data() {
    return {
      number: 1,
    };
  },
  methods: {
    factorial: function (n) {
      var result = 1;
      for (var i = 1; i <= n; i++) result *= i;
      return result;
    },
  },
};
</script>

<style>
</style>