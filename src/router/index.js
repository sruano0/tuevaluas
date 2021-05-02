import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import QuienesSomos from '../components/QuienesSomos.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/QuienesSomos',
    name: 'QuienesSomos',
    component: QuienesSomos
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
