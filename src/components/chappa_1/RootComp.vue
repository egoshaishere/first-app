<template>
  <div class="root">
    <div>ROOT</div>
    <Test> </Test>
    <Increment />
    <Factorial />
    <Computed />
    <Setters />
    <ClassBinding />
    <StylesBinding />
    <Watchers />
    <VueObjWork />
    <Refs />
    <Lifecycle />
  </div>
</template>

<script>
import Test from "./TestComponent.vue";
import Increment from "./Increment.vue";
import Factorial from "./Factorial.vue";
import Computed from "./Computed.vue";
import Setters from "./Setters.vue";
import ClassBinding from "./ClassBinding.vue";
import StylesBinding from "./StylesBinding.vue";
import Watchers from "./Watchers.vue";
import VueObjWork from "./VueObjWork.vue";
import Refs from './Refs.vue'
import Lifecycle from './LifeCycle.vue'



export default {
  name: "RootComp",
  components: {
    Test,
    Increment,
    Factorial,
    Computed,
    Setters,
    ClassBinding,
    StylesBinding,
    Watchers,
    VueObjWork,
    Refs,
    Lifecycle,
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
