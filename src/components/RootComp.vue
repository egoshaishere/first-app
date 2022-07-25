<template>
  <div class="root">
    <div>ROOT</div>
    <Test> </Test>
    <Increment />
    <Factorial />
    <Computed />
    <Setters />
  </div>
</template>

<script>
import Test from "./TestComponent.vue";
import Increment from "./Increment.vue";
import Factorial from "./Factorial.vue";
import Computed from "./Computed.vue";
import Setters from "./Setters.vue";

export default {
  name: "RootComp",
  components: {
    Test,
    Increment,
    Factorial,
    Computed,
    Setters,
  },

  props: {
    msg: String,
  },
};
</script>

<style>

.root {

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border: 2px solid red;
  border-radius: 50px;
  width: 600px;
  padding: 20px;
  
}


</style>
