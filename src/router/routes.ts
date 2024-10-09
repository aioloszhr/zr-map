import Layout from '@/views/amap/layout/index.vue'

export default [
  {
    path: '/',
    name: 'ZREntry',
    component: () => import('@/views/entry/index.vue')
  },
  {
    name: 'AMap',
    path: '/amap',
    component: Layout,
    children: [
      {
        name: 'Home',
        path: 'home',
        component: () => import('@/views/amap/home/index.vue')
      },
      {
        name: 'RouteLine',
        path: 'route/route-line',
        component: () => import('@/views/amap/route/route-line/index.vue')
      }
    ]
  }
]
