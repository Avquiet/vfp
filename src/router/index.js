import Vue from 'vue'
import Router from 'vue-router'

// import Dashboard from '../history/Dashboard'
// import About from '../history/About'
// import NotFound from '../history/NotFound'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () =>
        import(/* webpackChunkName: "PageDashBoard" */ '../history/Dashboard.vue')
    },
    {
      path: '/dashboard/:current',
      name: 'dashboard',
      component: () =>
        import(/* webpackChunkName: "PageDashBoard" */ '../history/Dashboard.vue')
    },
    {
      path: '/dashboard/:addpayment/:categoryList/:type/:amount/',
      name: 'addpayment',
      component: () =>
        import(/* webpackChunkName: "PageDashBoard" */ '../history/Dashboard.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () =>
        import(/* webpackChunkName: "PageDashBoard" */ '../history/About.vue')
    },
    {
      path: '/calculator',
      name: 'BestCalculator',
      component: () => import(/* webpackChunkName: "PageDashBoard" */ '../history/BestCalculator.vue')
    }
  ]
})
const titles = {
  dashboard: 'dashboard',
  About: 'About',
  BestCalculator: 'BestCalculator'
}

router.afterEach((to, from) => {
  console.log(to, from)
  document.title = titles[to.name]
})

export default router
