import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../home/HomePage.vue'
import AddToCartProduct from '../../pages/addtocart/AddToCartProduct.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/home', component: HomeView },
  { path: '/addtocart', component: AddToCartProduct }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router