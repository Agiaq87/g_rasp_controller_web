import LogoPresenter from '@/components/LogoPresenter.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const route: Array<RouteRecordRaw> = [
  { path: '/', component: LogoPresenter}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: route
})

export default router
