import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // bookmarkable route: /tasks shows the task list (lazy-loaded view)
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/tasks',
      name: 'tasks',
      // lazy-loaded to demonstrate async (route-level code splitting)
      component: () => import('../views/TasksView.vue'),
    },
    {
      path: '/tasks/:id',
      name: 'task-detail',
      // dynamic routing using route param `id`
      component: () => import('../views/TaskDetail.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      // catch-all 404 route (dynamic "catch all")
      component: () => import('../components/NotFound.vue'),
    },
  ],
})

export default router
