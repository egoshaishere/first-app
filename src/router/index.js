import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/chappa_1',
    name: 'chappa_1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "chappa_1" */ '../views/Chapter_1_View.vue')
  },
  {
    path: '/chappa_4',
    name: 'chappa_4',
    component: () => import(/* webpackChunkName: "chappa_1" */ '../views/Chapter_4_View.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
