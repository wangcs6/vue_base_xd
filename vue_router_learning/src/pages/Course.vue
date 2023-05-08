<template>
  <div class="course">
    <div class="title">课程页面</div>
    <div class="content">
      <div class="content_nav">
        <!-- <router-link
          replace
          :to="{ name: 'qianduan', params: { text: text } }"
          active-class="active"
          >前端</router-link
        > -->
        <!-- <router-link :to="`/course/front/${text}`" active-class="active">前端</router-link> -->
        <button @click="toFront">前端</button>
        <router-link to="/course/back" active-class="active">后端</router-link>
      </div>
      <div class="content_con">
        <!-- 路由缓存  这里指定前端缓存 前端页面要有name:"Front"-->
        <keep-alive include="Front">
          <router-view></router-view>
        </keep-alive>
      </div>
      <!-- <button @click="qianjin">前进</button>
      <button @click="houtui">后退</button>
      <button @click="qh">路由变化</button> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "小滴课堂",
    };
  },
  methods: {
    toFront() {
      //this.$router.replace 和上面的router-link属性里的replace一样
      this.$router.push({ 
        name: "qianduan", 
        params: { text: this.text } 
        });
    },
    qianjin() {
      this.$router.forward();
    },
    houtui() {
      this.$router.back();
    },
    qh() {
      this.$router.go(-1);  //-1就是后退一步，+1就是前进一步
    },
  },
};
</script>

<style lang="less" scoped>
.course {
  width: 200px;
  height: 200px;
  background-color: palevioletred;
  text-align: center;
  .content_nav {
    display: flex;
    justify-content: space-around;
    .active {
      color: red;
    }
  }
  .content_con {
    width: 140px;
    height: 100px;
    background-color: #fff;
    margin: 5px auto;
  }
}
</style>