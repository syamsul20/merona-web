import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product',
    name: 'product',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/ProductView.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
    }
  },
  {
    path: '/register',
    name: 'register',
    component: function () {
      return import(/* webpackChunkName: "register" */ '../views/RegisterView.vue')
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: function () {
      return import(/* webpackChunkName: "cart" */ '../views/CartView.vue')
    }
  },
  {
    path: '/order',
    name: 'order',
    component: function () {
      return import(/* webpackChunkName: "cart" */ '../views/OrderView.vue')
    }
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: function () {
      return import(/* webpackChunkName: "cart" */ '../views/CheckoutView.vue')
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
