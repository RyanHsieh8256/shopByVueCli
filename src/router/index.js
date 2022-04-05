import { createRouter, createWebHashHistory } from 'vue-router'
import TobuyInput from '../views/TobuyInput.vue'

const routes = [
  {
    path: '/',
    name: 'shop',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShopView.vue')
  },
  {
    path: '/TobuyInput',
    name: 'TobuyInput',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: TobuyInput,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
