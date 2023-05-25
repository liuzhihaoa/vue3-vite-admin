/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-24 10:40:13
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-05-25 11:02:01
 * @description: 描述
 */
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
//添加持久化存储插件
pinia.use(piniaPluginPersistedstate);
export default pinia;
