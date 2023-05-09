<template>
  <div>
    <HelloWorld />
    <Son />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Son from "./components/Son.vue";
import { ref,provide } from "vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    Son,
  },
  setup() {
    let name = ref("小滴课堂");

    provide("xd",name);
  },
};
</script>

<style>
</style>
