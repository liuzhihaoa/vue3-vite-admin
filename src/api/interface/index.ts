/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-24 17:23:17
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-05-25 10:13:41
 * @description: 描述
 */

// 请求响应参数(不含data)
export interface Result {
  code: number;
  msg: string;
}
// 请求响应参数(含data)
export interface ResultData<T = any> extends Result {
  data: T;
}

//登录模块
export namespace Login {
  export interface ReqLoginForm {
    username: string;
    password: string;
  }
  export interface ResLogin {
    access_token: string;
  }
}
