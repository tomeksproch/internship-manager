import { createRouter, createWebHistory } from 'vue-router'
import EditInternPage from '../pages/EditInternPage.vue'
import InternListPage from '@/pages/InternListPage.vue'
import AddInternPage from '@/pages/AddInternPage.vue'

const routes = [
  { path: '/', component: InternListPage },
  { path: '/edit/:id', component: EditInternPage, props: true },
  { path: '/add', component: AddInternPage, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
