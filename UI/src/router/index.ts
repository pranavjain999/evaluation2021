import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',
    component: () => import("../views/Bookmarks/Bookmarks.vue")
  },
  {
    path: '/news-detail',
    name: 'NewsDetails',
    component: () => import("../views/NewsDetails/NewsDetails.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
