/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-26 11:30:37
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-05-26 11:35:13
 * @description: 描述
 */
export type AsideThemeType = 'light' | 'dark';

export const asideTheme: Record<AsideThemeType, { [key: string]: string }> = {
  light: {
    '--el-login-text-color': '#303133',
  },
  dark: {
    '--el-login-text-color': '#dadada',
  },
};
