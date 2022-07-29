<template>
  <div class="setters">
    <div class="setters_logo">Setters</div>
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
    .setters {
        margin: 20px;
        border: 2px solid rgb(205, 50, 197);
        border-radius: 30px;
        padding: 20px;
    }

    .setters_logo {
        display: flex;
        justify-content: center;
        color: rgb(205, 50, 197);
        margin: 15px;
    }
</style>