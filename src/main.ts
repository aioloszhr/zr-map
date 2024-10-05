import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'

import '@/styles/base.scss' // 初始化基础样式

const app = createApp(App)

setupRouter(app)

app.mount('#app')
