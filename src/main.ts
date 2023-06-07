/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-22 16:17:16
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-06-07 14:00:48
 * @description: 描述
 */
import { createApp } from 'vue';
import router from '@/routers';
import pinia from './store';
import App from './App.vue';

// element css
import 'element-plus/dist/index.css';
// element dark css
import 'element-plus/theme-chalk/dark/css-vars.css';
// custom dark css
import '@/styles/theme/element-dark.scss';
// reset css
import '@/styles/reset.scss';
// iconfont css
import '@/assets/iconfont/iconfont.scss';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router).use(pinia).mount('#app');
