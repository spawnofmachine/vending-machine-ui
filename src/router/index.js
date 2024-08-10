import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { store } from '../main'

export function createAppRouter() {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
          requireAuth: false
        }
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
        meta: {
          requireAuth: false
        }
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/CartView.vue'),
        meta: {
          requireAuth: false
        }
      },
      {
        path: '/checkout',
        name: 'checkout',
        component: () => import('../views/CheckoutView.vue'),
        meta: {
          requireAuth: true
        }
      },
      {
        path: '/drinks',
        name: 'drinks',
        component: () => import('../views/DrinksView.vue'),
        meta: {
          requireAuth: false
        }
      },
      {
        path: '/flavors', //Need to fix the routes
        name: 'flavors',
        component: () => import('../views/FlavorView.vue'),
        meta: {
          requireAuth: false
        }
      },
      {
        path: '/cups',
        name: 'cups',
        component: () => import('../views/CupView.vue'),
        meta: {
          requireAuth: false
        }
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/UserLogin.vue'),
        meta: {
          requireAuth: false
        }
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('../views/RegisterUser.vue'),
        meta: {
          requireAuth: false
        }
      },
      {
        path: '/account',
        name: 'account',
        component: () => import('../views/UserAccount.vue'),
        meta: {
          requireAuth: true
        }
      }
    ]
  })
  router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth && store.state.token === null) {
      next('/login')
    } else {
      next()
    }
  })

  return router
}
