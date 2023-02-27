import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contenidos',
      name: 'contenidos',
      component: () => import('../views/ContenidosView.vue')
    },
    {
      path: '/apuntes',
      name: 'apuntes',
      component: () => import('../views/ApuntesView.vue')
    },
    {
      path: '/guias',
      name: 'guias',
      component: () => import('../views/GuiasView.vue')
    },
    {
      path: '/casos',
      name: 'casos',
      component: () => import('../views/CasosView.vue')
    },
    {
      path: '/tareas',
      name: 'tareas',
      component: () => import('../views/TareasView.vue')
    },
    {
      path: '/investigaciones',
      name: 'investigaciones',
      component: () => import('../views/InvestigacionesView.vue')
    },
    {
      path: '/evidencias',
      name: 'evidencias',
      component: () => import('../views/EvidenciasView.vue')
    },
    {
      path: '/proyecto',
      name: 'proyecto',
      component: () => import('../views/ProyectoView.vue')
    }
  ]
})

export default router
