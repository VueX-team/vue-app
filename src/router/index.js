
import { createRouter, createWebHistory } from 'vue-router'
import Account from '../views/Account.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    },
    {
        path: '/account',
        name: 'Account',
        component: Account
    }
  ]
})

export default router
