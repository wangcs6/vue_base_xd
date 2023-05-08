<template>
  <div class="bg">
    <div class="nav">
      <!-- <a href="">首页</a>
      <a href="">课程</a> -->
      <router-link to="/home" active-class="active">首页</router-link>
      <router-link to="/course" active-class="active">课程</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.bg {
  width: 200px;
  margin: 0 auto;
}
.active {
  color: red;
}
.nav {
  background-color: orange;
  display: flex;
  justify-content: space-around;
}
.content {
  margin-top: 10px;
  width: 200px;
  height: 200px;
  border: 1px solid black;
}
</style>
