import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import productRoutes from './modules/product'
import premessionRoutes from './modules/permission'
import orderRoutes from './modules/order'
import mediaRoutes from './modules/media'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页'
        }
      },
      productRoutes,
      premessionRoutes,
      orderRoutes,
      mediaRoutes
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/indexPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
