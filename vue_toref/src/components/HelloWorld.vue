<template>
  <h1>机构：{{ xd }}</h1>
  <h1>网站：{{ website }}</h1>
  <h1>
    前端课程：
    <ul>
      <li>{{ course.a }}</li>
      <li>{{ course.b }}</li>
      <li>{{ course.c }}</li>
    </ul>
  </h1>
</template>

<script>
import { reactive,toRefs } from "vue";
export default {
  name: "HelloWorld",
  setup() {
    let data = reactive({
      xd: "小滴课堂",
      website: "xdclasss.net",
      course: {
        a: "vue",
        b: "react",
        c: "node",
      },
    });

    // let xd = toRef(data,'xd')

    return {
      ...toRefs(data),  // toRefs好用哦
    };
  },
};
</script>


<style scoped>
</style>
