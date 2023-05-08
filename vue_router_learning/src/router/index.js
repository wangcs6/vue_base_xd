import VueRouter from 'vue-router';
import Home from '../pages/Home';
import Course from '../pages/Course';
import Front from '../pages/Front';
import Back from '../pages/Back';
const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/course',
      component: Course,
      children: [
        {
          name: 'qianduan',
          path: 'front/:text', //字符串形式传参时需加占位符告诉路由器，此时是参数
          component: Front,
          meta: { isAuth: true }
        },
        {
          path: 'back',
          component: Back,
          meta: { isAuth: true }
        }

      ]
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {
    if (localStorage.getItem('isShow') === '1') {
      next()
    } else {
      alert('请先登录')
    }
  } else {
    next()
  }
})

export default router;
