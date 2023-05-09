<template>
  <button @click="isShow = !isShow">切换</button>
  <HelloWorld v-if="isShow"/>
</template>

<script>
import {ref} from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup(){
    let isShow = ref(true)
    return {
      isShow,
    }
  }
}
</script>

<style>

</style>
