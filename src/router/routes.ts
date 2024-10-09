export default [
  {
    path: '/',
    name: 'ZRLogin',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/map',
    name: 'ZRMap',
    component: () => import('@/views/map/index.vue')
  }
]
