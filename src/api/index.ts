/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-24 14:32:07
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-05-25 10:05:30
 * @description: 描述
 */
import axios, { AxiosInstance, AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
import { ResultEnum } from '@/enum/httpEnum';
import { AxiosConfig } from './interface/type';
import { useUserStore } from '@/store/modules/user';
import axiosLoading from './helper/serviceLoading';
import { ElMessage } from 'element-plus';
import { ResultData } from './interface';

const config = {
  baseURL: import.meta.env.VITE_API_URL,
  timeout: ResultEnum.TIMEOUT,
  withCredentials: true,
};

const defaultConfig = {
  cancelSame: true,
  loading: true,
  isToken: true,
  a: 1,
};
class RequestHttp {
  public service: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config);
    //请求拦截器
    this.service.interceptors.request.use(
      (config: AxiosConfig) => {
        const userStore = useUserStore();
        const { loading, isToken } = config;
        if (loading) axiosLoading.addLoading();
        if (isToken && config.headers) {
          config.headers.set('x-access-token', userStore.token);
        }
        return config;
      },
      (error: AxiosError) => {
        axiosLoading.closeLoading();
        return Promise.reject(error);
      },
    );
    this.service.interceptors.response.use(
      (reponse: AxiosResponse) => {
        const { data } = reponse;
        axiosLoading.closeLoading();
        if (data.code !== ResultEnum.SUCCESS) {
          ElMessage.error(data.msg);
          return Promise.reject(data);
        }
        return data;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      },
    );
  }
  async get<T>(url: string, params?: object, config = {}): Promise<ResultData<T>> {
    return this.service.get(url, { params, ...config });
  }
  async post<T>(url: string, params?: object, config = {}): Promise<ResultData<T>> {
    return this.service.post(url, params, config);
  }
  put<T>(url: string, params?: object, config = {}): Promise<ResultData<T>> {
    return this.service.put(url, params, config);
  }
  delete<T>(url: string, params?: any, config = {}): Promise<ResultData<T>> {
    return this.service.delete(url, { params, ...config });
  }
  async download<T>(url: string, params?: object, config = {}): Promise<ResultData<T>> {
    return this.service.post(url, params, { ...config, responseType: 'blob' });
  }
}

export default new RequestHttp({ ...config, ...defaultConfig });
