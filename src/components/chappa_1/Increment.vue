<template>
  <div class="increment">
    <div>INCREMENT</div>
    <div>{{ stringData }}</div>
    <div>{{ welcome() }}</div>
    <div>{{ displayUser() }}</div>

    <button class="increment__button btn" v-on:click="incrementAge">++</button>
    <button class="decrement__button btn" v-on:click="decrementAge">--</button>
    <button class="multiply__button btn" v-on:click="muntiplyAge($event, 3)">*</button>
  </div>
</template>

<style>
.increment {
  margin: 50px;
  padding: 20px;
  width: 500px;
  
  color: blueviolet;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border: 2px solid blueviolet;
  border-radius: 300px;
}

.btn {
  width: 150px;
  height: 20px;
}

</style>

<script>
export default {
  name: "Increment",
  data() {
    return {
      stringData: "Some text lalal",
      name: "Tom",
      age: 30,
    };
  },

  methods: {
    welcome() {
      return "Welcome " + this.name;
    },
    displayUser() {
      return "UserInfo: name - " + this.name + "  age - " + this.age;
    },
    incrementAge(e) {
      console.log(e);
      this.age++;
    },
    decrementAge(e) {
      console.log(e);
      this.age--;
    },
    muntiplyAge(e, n) {
      console.log(e);
      this.age = this.age * n
    },
    incrementAgeThreeTimes() {
      this.incrementAge();
      this.incrementAge();
      this.incrementAge();
    },
  },
};
</script>

