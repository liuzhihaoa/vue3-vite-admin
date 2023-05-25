/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-24 09:08:52
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-05-24 14:13:35
 * @description: 描述
 */
/**
 * @description: 全局主题 hooks
 */
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/store/modules/global';

export const useTheme = () => {
  const globalStore = useGlobalStore();
  const { isDark } = storeToRefs(globalStore);
  // 暗黑模型切换
  const switchDark = () => {
    const html = document.documentElement;
    if (isDark.value) {
      html.setAttribute('class', 'dark');
    } else {
      html.setAttribute('class', '');
    }
  };
  // 初始化主题
  const initTheme = () => {
    switchDark();
  };
  return {
    switchDark,
    initTheme,
  };
};
