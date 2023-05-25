/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-24 17:52:20
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-05-25 16:07:33
 * @description: 描述
 */
import { Login } from '../interface';
import { PORT1 } from '@/config/servicePort';
import http from '@/api';

/**
 * @name: 登录模块
 */
export const loginApi = (params: Login.ReqLoginForm) => {
  return http.post<Login.ResLogin>(`${PORT1}/login`, { ...params }, { loading: false });
};
