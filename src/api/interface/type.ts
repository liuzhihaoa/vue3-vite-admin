/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-24 15:47:58
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-05-24 15:50:38
 * @description: 描述
 */
import type { InternalAxiosRequestConfig } from 'axios';

export interface AxiosConfig extends InternalAxiosRequestConfig {
  cancelSame?: boolean;
  loading?: boolean;
  isToken?: boolean;
  timeout?: number;
}
