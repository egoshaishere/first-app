<template>
  <div class="styles_bindings">
    <div class="logo">Styles Bindings</div>
    <div
      class="region"
      v-bind:style="{
        'background-color': color,
        height: height + 'px',
        width: width + 'px',
      }"
    ></div>
    <br /><br />
    <input type="text" v-model="color" />
    <br /><br />
    <input type="number" v-model="width" />
    <br /><br />
    <input type="number" v-model="height" />
    <div class="region" v-bind:style="styleObj"></div>
    <br /><br />
    <input type="text" v-model="color" />
    <br /><br />
    <input type="number" v-model="width" />
    <br /><br />
    <input type="number" v-model="height" />

    <div class="region" v-bind:style="[colorStyle, sizeStyle]"></div>
    <br /><br />
    <input type="text" v-model="color" />
    <br /><br />
    <input type="number" v-model="width" />
    <br /><br />
    <input type="number" v-model="height" />
  </div>
</template>

<script>
export default {
  name: "StylesBinding",
  data() {
    return {
      color: "red",
      width: 75,
      height: 75,
    };
  },
  computed: {
    styleObj: function () {
      return {
        "background-color": this.color,
        height: this.height + "px",
        width: this.width + "px",
      };
    },
    colorStyle: function () {
      return {
        "background-color": this.color,
      };
    },
    sizeStyle: function () {
      return {
        height: this.height + "px",
        width: this.width + "px",
      };
    },
  },
};
</script>

<style>
.styles_bindings {
  margin: 20px;
  border: 2px solid yellowgreen;
  border-radius: 30px;
  padding: 20px;
}

.logo {
  display: flex;
  justify-content: center;
  color: yellowgreen;
}
</style>