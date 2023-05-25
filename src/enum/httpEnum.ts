/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-24 14:35:42
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-05-24 14:42:41
 * @description: 描述
 */
/**
 * @description: http请求配置
 */
export enum ResultEnum {
  SUCCESS = 200,
  ERROR = 500,
  TIMEOUT = 5000,
}

/**
 * @description: 请求方法枚举
 */
export enum RequestEnum {
  GET = 'get',
  POST = 'post',
  DELETE = 'delete',
  PUT = 'put',
  PATCH = 'patch',
}

/**
 * @description: 常用的Content-Type类型
 */
export enum ContentTypeEnum {
  //json
  JSON = 'application/json;charset=UTF-8',
  //text
  TEXT = 'text/plain;charset=UTF-8',
  //form-data 一般配合qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data 文件上传
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}
