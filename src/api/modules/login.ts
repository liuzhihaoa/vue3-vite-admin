/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-24 17:52:20
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-05-26 15:06:26
 * @description: 描述
 */
import { Login } from '../interface';
import { PORT1 } from '@/config/servicePort';
import http from '@/api';

/**
 * @name: 登录模块
 */
// 用户登录
export const loginApi = (params: Login.ReqLoginForm) => {
  return http.post<Login.ResLogin>(`${PORT1}/login`, { ...params }, { loading: false });
};

//获取菜单列表
export const getAutnMenuListApi = () => {
  return http.get<Menu.MenuOptions[]>(`${PORT1}/menu/list`, {}, { loading: false });
};

//获取按钮列表
export const getAuthButtonListApi = () => {
  return http.get<Login.ResAuthbuttons>(`${PORT1}/auth/buttons`, {}, { loading: false });
};
