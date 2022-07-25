<template>
  <div>
    <input type="text" v-model="firstname" />
    <input type="text" v-model="lastname" />
    <input type="text" v-model="fullname" />
    <p>Имя: {{ fullname }}</p>
  </div>
</template>

<script>
export default {
  name: "Setters",
  data() {
    return {
      firstname: "Tom",
      lastname: "Smith",
    };
  },
  computed: {
    fullname: {
      get: function () {
        return this.firstname + " " + this.lastname;
      },
      set: function (newValue) {
        var names = newValue.split(" ");
        this.firstname = names[0];
        this.lastname = names[names.length - 1];
      },
    },
  },
};
</script>

<style>
</style>