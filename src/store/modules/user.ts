/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-25 11:17:41
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-06-07 17:27:48
 * @description: 描述
 */
import { defineStore } from 'pinia';
import { UserState } from '../interface';
import piniaPersistConfig from '@/config/piniaPersist';

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => {
    return {
      token: '',
      userInfo: { name: 'lzh' },
    };
  },
  getters: {},
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    setUserInfo(userInfo: UserState['userInfo']) {
      this.userInfo = userInfo;
    },
  },
  persist: piniaPersistConfig('user'),
});
