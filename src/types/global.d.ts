/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-26 14:04:17
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-06-05 10:12:32
 * @description: 描述
 */
// Menu
declare namespace Menu {
  interface MenuOptions {
    path: string;
    name: string;
    component?: string | (() => Promise<unknown>);
    redirect?: string;
    meta: MetaProps;
    children?: MenuOptions[];
  }
  interface MetaProps {
    icon: string;
    title: string;
    activeMenu?: string;
    isLink?: string;
    isHide: boolean;
    isFull: boolean;
    isAffix: boolean;
    isKeepAlive: boolean;
  }
}

//Generic Tools
type ObjToKeyValArray<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T];
