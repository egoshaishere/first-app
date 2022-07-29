<template>
  <div class="watchers">
    <div class="watchers__logo">Observable Properties</div>
    <p>Введите число:<input v-model="number" /></p>
    <p>{{ result }}</p>
  </div>
</template>

<script>
export default {
  name: "Watchers",
  data() {
    return {
      number: "",
      result: "",
    };
  },
  watch: {
    number: function (newNumber) {
      if (newNumber > 0) {
        this.factorial(newNumber);
      }
    },
  },
  methods: {
    factorial: function (newNumber) {
      this.result = "Идет вычисление факториала...";
      var vm = this;

      // что то просится вместо синтетического сет таймаут
      setTimeout(function () {
        var res = 1;
        for (var i = 1; i <= newNumber; i++) {
          res = res * i;
        }
        vm.result = "Факториал числа " + newNumber + " равен " + res;
      }, 2000);


    },
  },
};
</script>

<style>
.watchers {
  margin: 20px;
  border: 2px solid rgb(255, 145, 0);
  border-radius: 30px;
  padding: 20px;
}

.watchers__logo {
  display: flex;
  justify-content: center;
  color: rgb(255, 145, 0);
}
</style>