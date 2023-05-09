<template>
  <div></div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    console.log('孙子组件：',inject('xd'));
    
  },
};
</script>

<style lang="scss" scoped>
</style>