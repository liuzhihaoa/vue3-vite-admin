/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-26 14:01:21
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-06-01 17:01:00
 * @description: 描述
 */
import { defineStore } from 'pinia';
import { getAuthButtonListApi, getAutnMenuListApi } from '@/api/modules/login';
import { AuthState } from '../interface';
import { getFlatMenuList, getShowMenuList } from '@/utils';

export const useAuthStore = defineStore({
  id: 'auth',
  state: (): AuthState => ({
    //按钮权限列表
    authButtonList: {},
    //菜单权限列表
    authMenuList: [],
    //当前的页面的router name,用来做按钮权限筛选
    routerName: '',
  }),
  getters: {
    // 菜单权限列表 ==> 这里的菜单没有经过任何处理
    authMenuListGet: (state) => state.authButtonList,
    // 菜单全权限列表 ==>左侧菜单渲染，需要过滤isHide为true的菜单
    showMenuListGet: (state) => getShowMenuList(state.authMenuList),
    // 菜单权限列表 ==> 扁平化之后的一维数组菜单，主要用来添加动态路由
    flatMenuListGet: (state) => getFlatMenuList(state.authMenuList),
  },
  actions: {
    async getAuthMenuList() {
      const { data } = await getAutnMenuListApi();
      this.authMenuList = data;
    },
    async getAuthButtonList() {
      const { data } = await getAuthButtonListApi();
      this.authButtonList = data;
    },
    async setRouterName(name: string) {
      this.routerName = name;
    },
  },
});
