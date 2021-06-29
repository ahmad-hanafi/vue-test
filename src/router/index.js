import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home
  },
  {
    path: '/add',
    name: 'AddPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddPage.vue')
  },
  {
    path: '/update/',
    name: 'UpdatePage',
    component: () => import(/* webpackChunkName: "about" */ '../components/UpdateData.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
