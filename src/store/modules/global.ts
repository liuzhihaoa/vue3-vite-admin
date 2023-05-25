import { defineStore } from 'pinia';
import piniaPersistConfig from '@/config/piniaPersist';

export const useGlobalStore = defineStore({
  id: 'global',
  state: () => {
    return {
      // 暗黑模式
      isDark: false,
    };
  },
  getters: {},
  actions: {},
  persist: piniaPersistConfig('global'),
});
