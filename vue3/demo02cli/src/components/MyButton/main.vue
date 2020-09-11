<template>
  <div>
    <button @click="headleCilck">{{desc}}</button>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  props: {
    desc: {
      type: String,
      default: "按钮",
    },
  },
  setup() {},
};
</script>

<style>
</style>