<template>
  <div>
    <div class="item">vue<input type="text" /></div>
    <div class="item">react<input type="text" /></div>
    <div class="item">angular<input type="text" /></div>
  </div>
</template>

<script>
export default {
  name: "Front",
  mounted() {
    console.log(this.$route.params.text);
  },
};
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
}
input {
  width: 60px;
}
</style>