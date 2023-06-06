/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-23 11:07:54
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-06-02 14:11:28
 * @description: 描述
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import { staticRoutes } from './modules/staticRoutes';
import { initDynamicRouter } from './modules/dynamicRouter';
import NProgress from '@/config/nprogress';
import { useUserStore } from '@/store/modules/user';
import { useAuthStore } from '@/store/modules/auth';

/**
 * @description 📚 路由参数配置简介
 * @param path ==> 菜单路径
 * @param name ==> 菜单别名
 * @param redirect ==> 重定向地址
 * @param component ==> 视图文件路径
 * @param meta ==> 菜单信息
 * @param meta.icon ==> 菜单图标
 * @param meta.title ==> 菜单标题
 * @param meta.activeMenu ==> 当前路由为详情页时，需要高亮的菜单
 * @param meta.isLink ==> 是否外链
 * @param meta.isHide ==> 是否隐藏
 * @param meta.isFull ==> 是否全屏(示例：数据大屏页面)
 * @param meta.isAffix ==> 是否固定在 tabs nav
 * @param meta.isKeepAlive ==> 是否缓存
 * */
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...staticRoutes],
  strict: false, //是否禁止尾部斜线
  scrollBehavior: () => {
    return {
      left: 0,
      top: 0,
    };
  },
});

/**
 * @description: 路由拦截钩子
 */
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  const authStore = useAuthStore();
  // 1.NProgress开始
  NProgress.start();

  // 2.设置动态标题
  const title = import.meta.env.VITE_APP_TITLE;
  document.title = title;
  //3.判断是否是访问登录页，有Token就在当前页面，没有Token就重置路由到登录页
  if (to.path.toLocaleLowerCase() === '/login') {
    if (userStore.token) return next(from.fullPath);
    return next();
  }
  // 判断是否有Token,没有就重定向到login页面
  if (!userStore.token) return next({ path: '/login', replace: true });

  // 判断菜单列表，为空就重新请求菜单列表并添加动态路由
  if (!authStore.authMenuList.length) {
    await initDynamicRouter();
    return next({ ...to, replace: true });
  }
  //存储routerName做按钮权限筛选
  authStore.setRouterName(to.path as string);
  next();
});

/**
 * @description: 跳转路由结束
 */
router.afterEach(() => {
  NProgress.done();
});

export default router;
