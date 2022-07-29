<template>
  <div class="test">
    <div>TEST</div>
    <input type="text" v-on:input="setMessage" />
    <p>{{message}}</p>
    <div>{{static1}}</div>
  </div>
</template>

<script>


export default {
  name: "Test",

data() {
    return {
      message: 'Hello Vue 3!',
      static1: 'just string'
    }
},
methods: {
    setMessage(event){
        this.message = event.target.value
        console.log(event.target.value)
    }
}

}
</script>

<style>

.test {

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 300px;
  border: 2px solid silver;
  border-radius: 25px;
}
</style>