// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "./mock/index.ts";
import 'ant-design-vue/es/message/style/css';
// import Antd from 'ant-design-vue';
import App from './App.vue'
// import router from './router'
import * as Icons from '@ant-design/icons-vue'

const app = createApp(App)

// 全局使用图标，遍历引入
const icons: any = Icons
for (const i in icons) {
  app.component(i, icons[i])
}

app.use(createPinia())
// app.use(router)

app.mount('#app')
