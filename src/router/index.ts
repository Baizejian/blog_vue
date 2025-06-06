import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import AdminLayout from '@/layout/AdminLayout.vue'
import AdminDashboard from '@/views/AdminDashboard.vue'
import CategoryManager from '@/views/CategoryManager.vue'
import ArticleManager from '@/views/ArticleManager.vue'
import UserManager from '@/views/UserManager.vue'

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: LoginView,
  },
  {
    path: '/admin',
    component: AdminLayout,
    redirect: '/admin/dashboard', // ✅ 默认跳转到 dashboard
    children: [
      {
        path: 'dashboard',
        name: 'AdminDashboard',
        component: AdminDashboard,
      },
      {
        path: 'categories',
        name: 'CategoryManager',
        component: CategoryManager,
      },
      {
        path: 'articles',
        name: 'ArticleManager',
        component: ArticleManager,
      },
      {
        path: 'users',
        name: 'UserManager',
        component: UserManager,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/login', // 可选：兜底重定向
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
