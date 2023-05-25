/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-24 14:03:18
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-05-24 14:08:21
 * @description: 描述
 */
import { PersistedStateOptions } from 'pinia-plugin-persistedstate';
/**
 * @name: piniaPersistConfig
 * @param {string} key 存储到持久化的 name
 * @param {string} paths 需要持久化的 state name
 * @return {*} persist
 * @description: pinia持久化配置
 */
const piniaPersistConfig = (key: string, paths?: string[]) => {
  const persist: PersistedStateOptions = {
    key,
    storage: localStorage,
    paths,
  };
  return persist;
};
export default piniaPersistConfig;
