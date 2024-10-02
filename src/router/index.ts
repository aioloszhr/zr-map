import { createRouter, createWebHashHistory } from 'vue-router'
import constantRoutes from './routes'

import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes as unknown as RouteRecordRaw[],
})

/** 注册vue-router */
export const setupRouter = (app: App<Element>) => {
  app.use(router)
}
