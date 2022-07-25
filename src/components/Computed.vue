<template>
  <div>
    <input type="text" v-model="name" />
    <input type="text" v-model="age" />
    <p>Имя: {{ name }} Возраст {{ age }}</p>
    <!-- <p>{{ checkAge() }}</p> -->
    <p>{{ enabled }}</p>
  </div>
</template>

<script>
export default {
  name: "Computed",
  data() {
    return {
      name: "Tom",
      age: 25,
    };
  },

  computed: {
    enabled: function () {
      console.log("computed");
      if (this.age > 17) return "доступ разрешен";
      else return "доступ запрещен";
    },
  },

  methods: {
    // checkAge: function () {
    //   console.log("method");
    //   if (this.age > 17) return "доступ разрешен";
    //   else return "доступ запрещен";
    // },
  },
};
</script>

<style>
</style>