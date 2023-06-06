/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-22 14:16:50
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-05-25 16:04:17
 * @description: 描述
 */
import { defineConfig, loadEnv, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
//这里使用path需要安装 @types/node,安装的@types/node只是为ts中使用node原生库提供类型支持,因为ts并不知道突然冒出来的path是哪里来的
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  console.log(env.VITE_PROXY[0]);
  return {
    server: {
      host: '0.0.0.0',
      port: 8080,
      open: true,
      https: false,
      proxy: {
        '/api': {
          target: 'https://mock.mengxuegu.com/mock/629d727e6163854a32e8307e',
          changeOrigin: true,
          ws: true,
          rewrite: (path: string) => path.replace(/^\/api/, ''),
        },
      },
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'), // @代替src
      },
    },
  };
});
