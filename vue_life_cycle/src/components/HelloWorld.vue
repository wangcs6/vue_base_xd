<template>
  <h1 style="background-color: green">
    当前计数：<span>{{ num }}</span>
    <br />
    <button @click="handleClick">增加</button>
  </h1>
</template>

<script>
import {ref,
onBeforeMount,onMounted,
 onBeforeUpdate,onUpdated,
 onBeforeUnmount,onUnmounted} from 'vue'
export default {
  name: "HelloWorld",
  setup(){
    let num = ref(0)
    function handleClick() {
      num.value++
    }
    //生命周期函数
    console.log('==setup==');
    onBeforeMount(() => {
      console.log('===onBeforeMount');
    })
    onMounted(() => {
      console.log('===onMounted');
    })
    onBeforeUpdate(() => {
      console.log('===onBeforeUpdate');
    })
    onUpdated(() => {
      console.log('===onUpdated');
    })

    onBeforeUnmount(() => {
      console.log('===onBeforeUnmount');
    })
    onUnmounted(() => {
      console.log('===onUnmounted');
    })
    

    return {
      num,
      handleClick,
    }
  }
};
</script>


<style scoped>
</style>
