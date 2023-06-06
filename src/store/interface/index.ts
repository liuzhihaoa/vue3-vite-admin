/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-25 11:18:23
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-06-05 11:51:40
 * @description: 描述
 */
export type LayoutType = 'vertical' | 'classic' | 'transverse' | 'columns';

export type AssemblySizeType = 'large' | 'default' | 'small';

export type LanguageType = 'zh' | 'en' | null;

/* GlobalState */
export interface GlobalState {
  layout: LayoutType;
  assemblySize: AssemblySizeType;
  language: LanguageType;
  maximize: boolean;
  primary: string;
  isDark: boolean;
  isGrey: boolean;
  isWeak: boolean;
  asideInverted: boolean;
  isCollapse: boolean;
  breadcrumb: boolean;
  breadcrumbIcon: boolean;
  tabs: boolean;
  tabsIcon: boolean;
  footer: boolean;
}
/* UserState */
export interface UserState {
  token: string;
  userInfo: { name: string };
}

/* AuthState */
export interface AuthState {
  authButtonList: {
    [key: string]: string;
  };
  authMenuList: Menu.MenuOptions[];
  routerName: string;
}
