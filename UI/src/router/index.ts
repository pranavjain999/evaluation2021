import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/dashboard/dashboard.vue'
import OrderSearch from '../components/dashboard/ordersearch.vue'
import MerchantSearch from '../components/dashboard/merchantsearch.vue'
import MenuReview from '../components/dashboard/menureview.vue'
import MenuSearch from '../components/dashboard/menusearch.vue'
Vue.use(VueRouter)

const routes = [ 
  {
    path: '/', 
    name: 'dashboard', 
    component: Dashboard
 
  }, 
  {
    path: '/ordersearch', 
    name: 'ordersearch', 
    component: OrderSearch
  },
  {
    path: '/merchantsearch', 
    name: 'merchantsearch', 
    component: MerchantSearch
  },
  {
    path: '/menusearch', 
    name: 'menusearch', 
    component: MenuSearch
  },
  {
    path: '/menureview', 
    name: 'menureview', 
    component: MenuReview
  },
]

const router = new VueRouter( {
  mode:'history', 
  base:process.env.BASE_URL, 
  routes
})

export default router
