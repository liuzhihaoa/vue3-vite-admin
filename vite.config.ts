/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-22 14:16:50
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-05-22 14:55:47
 * @description: 描述
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
//这里使用path需要安装 @types/node,安装的@types/node只是为ts中使用node原生库提供类型支持,因为ts并不知道突然冒出来的path是哪里来的
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve('./src'), // @代替src
    },
  },
});
