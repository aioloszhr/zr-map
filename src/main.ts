import { createApp } from 'vue'
import 'virtual:svg-icons-register'
import App from './App.vue'
import { setupRouter } from './router'
import { setupPinia } from './store'

import 'element-plus/dist/index.css'
import '@/styles/base.scss' // 初始化基础样式

const app = createApp(App)

setupRouter(app)
setupPinia(app)

app.mount('#app')
