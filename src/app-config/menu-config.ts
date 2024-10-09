import type { Menu } from '@/types'

export const menus: Menu[] = [
  {
    path: '/amap/home',
    meta: { title: '首页', icon: 'homefilled' }
  },
  {
    path: '/amap/route',
    meta: { title: '路线规划', icon: 'route-planning' },
    children: [{ path: 'route-line', meta: { title: '展示' } }]
  }
]
