import Vue from 'vue'
import Router from 'vue-router'

import Navi from '../components/Navi.vue'
import Info from '../components/Info.vue'

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
      path: '/info',
      component: Info
    }
  ]
})
