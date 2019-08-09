import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      component: () => import('../components/Navi.vue')
    },
    {
      path: '/menu',
      component: () => import('../components/Menu.vue'),
      children: [
        {
          path: '/',
          redirect: '/menu1'
        },
        {
          path: '/menu1',
          component: () => import('../components/menu/Menu1.vue')
        }, {
          path: '/menu2',
          component: () => import('../components/menu/Menu2.vue')
        }, {
          path: '/menu3',
          component: () => import('../components/menu/Menu3.vue')
        }
      ]
    },
    {
      path: '/search',
      component: () => import('../components/Search.vue')
    },
    {
      path: '/loading',
      component: () => import('../components/Loading.vue')
    },
    {
      path: '/page',
      component: () => import('../components/Page.vue')
    }
  ]
})
