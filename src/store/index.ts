import { App } from 'vue'
import { createPinia } from 'pinia'

//创建一个pinia实例
const pinia = createPinia()

/** 注册pinia */
export const setupPinia = (app: App<Element>) => {
  app.use(pinia)
}
