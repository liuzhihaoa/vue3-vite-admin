/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-22 14:16:50
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-05-22 17:07:36
 * @description: 描述
 */
import { defineConfig, loadEnv, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
//这里使用path需要安装 @types/node,安装的@types/node只是为ts中使用node原生库提供类型支持,因为ts并不知道突然冒出来的path是哪里来的
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  return {
    server: {
      host: '0.0.0.0',
      port: 8080,
      open: true,
      https: false,
      proxy: {
        '/api': {
          target: env.VITE_PROXY[1],
          changeOrigin: true,
          ws: true,
          rewrite: (path: string) => path.replace(/^\/api/, ''),
        },
      },
    },
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve('./src'), // @代替src
      },
    },
  };
});
