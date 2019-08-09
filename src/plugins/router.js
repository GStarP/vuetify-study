import Vue from 'vue'
import Router from 'vue-router'

import Navi from '../components/Navi.vue'
import Menu from '../components/Menu.vue'
import Menu1 from '../components/menu/Menu1.vue'
import Menu2 from '../components/menu/Menu2.vue'
import Menu3 from '../components/menu/Menu3.vue'
import Search from '../components/Search.vue'

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
      component: Navi
    },
    {
      path: '/menu',
      component: Menu,
      children: [
        {
          path: '/',
          redirect: '/menu1'
        },
        {
          path: '/menu1',
          component: Menu1
        }, {
          path: '/menu2',
          component: Menu2
        }, {
          path: '/menu3',
          component: Menu3
        }
      ]
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/loading',
      component: () => import('../components/Loading.vue')
    }
  ]
})
