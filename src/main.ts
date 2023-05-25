/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-22 16:17:16
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-05-25 14:30:16
 * @description: 描述
 */
import { createApp } from 'vue';
import router from '@/routers';
import pinia from './store';
import App from './App.vue';

import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import '@/styles/reset.scss';
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router).use(pinia).mount('#app');
