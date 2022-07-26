<template>
  <div class="class_bindings">
    <div class="bindings_logo">Class Bindings</div>
    <!-- <div>
      <div
        class="region"
        v-bind:class="{ active: isActive }"
        v-on:click="isActive = !isActive"
      ></div>
      <div class="region"></div>

      <div
        class="region"
        v-bind:class="{ active: isActive, bounded: isBounded }"
      ></div>
      <div class="region"></div>
      <button v-on:click="isActive = !isActive">Toggle color</button>
      <button v-on:click="isBounded = !isBounded">Toggle border</button>
    </div> -->
    <!-- 
    <div>
      ???????????
      <div class="region" v-bind:class="color"></div>
      <input type="text" v-model="color" />
    </div> -->

    <div>
      <div
        class="region"
        v-bind:class="[color, { bounded: isBounded }, size]"
        v-on:click="isBounded = !isBounded"
      ></div>
      <br />
      <input type="text" v-model="color" />
      <br />
      <input type="text" v-model="size" />
    </div>
  </div>
</template>




<script>
export default {
  name: "ClassBinding",
  data() {
    return {
      isActive: false,
      isBounded: false,
      //color: "",
      color: "red",
      size: "small",
      isBounded: false,
    };
  },
  computed: {
    classObj: function () {
      return {
        active: this.isActive,
        bounded: this.isBounded,
      };
    },
  },
};
</script>




<style>
.class_bindings {
  border: 2px solid rgb(5, 108, 226);
  border-radius: 30px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

}
.bindings_logo {
  color: rgb(5, 108, 226);
  
}
.region{
    background-color: #999;
    margin: 10px;
    width: 75px;
    height: 75px;
}
.bounded{
    border: 2px solid black;
}
.yellow{ 
    background-color: yellow; 
}
.red{ 
    background-color: red; 
}
.blue{ 
    background-color: blue; 
}
.green{ 
    background-color: green; 
}
.big{
    width: 100px;
    height: 100px;
}
.small{
    width: 50px;
    height: 50px;
}

</style>