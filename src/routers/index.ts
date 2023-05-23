/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-23 11:07:54
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-05-23 17:43:22
 * @description: 描述
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import { staticRoutes } from './modules/staticRoutes';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...staticRoutes],
  strict: false, //是否禁止尾部斜线
  scrollBehavior: () => {
    return {
      left: 0,
      top: 0,
    };
  },
});

export default router;
