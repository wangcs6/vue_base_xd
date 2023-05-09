<template>
  <Grandson />
</template>

<script>
import Grandson from './Grandson.vue';
import { inject } from "vue";

export default {
    name:"Son",
    components:{
        Grandson,
    },
    setup(){
        console.log("儿子组件：",inject("xd"));
        
    }
};
</script>

<style lang="scss" scoped>
</style>