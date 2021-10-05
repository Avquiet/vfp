import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '../history/Dashboard'
import About from '../history/About'
import NotFound from '../history/NotFound'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/dashboard/:current',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/dashboard/:addpayment/:categoryList/:type/:amount/',
      name: 'addpayment',
      component: Dashboard
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

const titles = {
  dashboard: 'dashboard',
  About: 'About',
  NotFound: 'NotFound'
}

router.afterEach((to, from) => {
  console.log(to, from)
  document.title = titles[to.name]
})

export default router
