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
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/wishlist',
      name: 'Wishlist',
      component: () => import('../views/Wishlist.vue')
    },
    {
      path: '/signin',
      name: 'Signin',
      component: () => import('../views/Signin.vue')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/Signup.vue')
    },
    {
      path: '/product/:id',
      name: 'ProductOne',
      component: () => import('../views/ProductOne.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/Cart.vue')
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: () => import('../views/Checkout.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Error',
      component: () => import('../views/Error.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if ((to.name == 'Login' || to.name == 'Register') && localStorage.getItem('token')) {
    next('/')
  } else {
    next()
  }
})

export default router
