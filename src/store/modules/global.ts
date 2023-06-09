/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-25 11:17:33
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-06-09 16:23:34
 * @description: 描述
 */
import { defineStore } from 'pinia';
import piniaPersistConfig from '@/config/piniaPersist';
import { GlobalState } from '../interface';

export const useGlobalStore = defineStore({
  id: 'global',
  state: () => {
    return {
      // 暗黑模式
      isDark: false,
      // 菜单是否折叠
      isCollapse: false,
      // element 组件大小
      assemblySize: 'default',
      // 语言
      language: 'zh',
      // 当前页面是最大化
      maximize: false,
    };
  },
  getters: {},
  actions: {
    setGlobalState(...args: ObjToKeyValArray<GlobalState>) {
      this.$patch({ [args[0]]: args[1] });
    },
  },
  persist: piniaPersistConfig('global'),
});
