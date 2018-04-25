import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'

Vue.use(Router)

const router= new Router({
  mode: 'history',
  base: "",
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },{
      path: '/userManager',
      name: 'userManager',
      component: resolve => require(["../components/userManager.vue"], resolve),
      meta:{auth:true}
    },
    {
      path: '/groupManager',
      name: 'groupManager',
      component: resolve => require(["../components/groupManager.vue"], resolve),
      meta:{auth:true}
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: resolve => require(["../components/favorites.vue"], resolve),
      meta:{auth:true}
    },
    {
      path: '/noticeConsume',
      name: 'noticeConsume',
      component: resolve => require(["../components/noticeConsume.vue"], resolve),
      meta:{auth:true}
    },
    {
      path: '/news',
      name: 'news',
      component: resolve => require(["../components/news.vue"], resolve),
      meta:{auth:true}
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(["../components/index.vue"], resolve),
      meta:{auth:true}
    },
    {
      path: '/accountTrade',
      name: 'accountTrade',
      component: resolve => require(["../components/accountTrade.vue"], resolve),
      meta:{auth:true}
    },
    {
      path: '/monitorList',
      name: 'monitorList',
      component: resolve => require(["../components/monitorList.vue"], resolve),
      meta:{auth:true}
    },
  ]
})
const router2= new Router({
  mode: 'history',
  base: "",
  linkActiveClass: 'active',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: resolve => require(["../components/index.vue"], resolve),
      meta:{auth:true}
    },
  ]
})
router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.auth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    const login=window.localStorage.getItem('logined');
    if (!login) {
      alert("需要登录");
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      // console.log()
      next()
    }
  } else {
    
    next() // 确保一定要调用 next()
  }
})

export default router;
