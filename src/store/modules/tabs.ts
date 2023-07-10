/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-06-09 09:52:37
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-06-09 14:57:46
 * @description: 描述
 */
import { defineStore } from 'pinia';
import piniaPersistConfig from '@/config/piniaPersist';
import { TabsMenuProps, TabState } from '../interface';
import router from '@/routers';

export const useTabsStore = defineStore({
  id: 'tabs',
  state: (): TabState => ({
    tabsMenuList: [],
  }),
  actions: {
    // add Tabs
    addTabs(tabItem: TabsMenuProps) {
      if (this.tabsMenuList.every((item: TabsMenuProps) => item.path !== tabItem.path)) {
        this.tabsMenuList.push(tabItem);
      }
    },
    // Remove Tabs
    removeTabs(tabPath: string, isCurrent: boolean) {
      const tabsMenuList = this.tabsMenuList;
      if (isCurrent) {
        for (const [index, item] of tabsMenuList.entries()) {
          if (item.path === tabPath) {
            const nextTab = tabsMenuList[index + 1] || tabsMenuList[index - 1];
            if (!nextTab) break;
            router.push(nextTab.path);
            break;
          }
        }
      }
    },
  },
  persist: piniaPersistConfig('tabs'),
});
