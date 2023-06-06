/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-26 13:59:21
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-06-01 17:46:05
 * @description: 描述
 */
import { useUserStore } from '@/store/modules/user';
import { useAuthStore } from '@/store/modules/auth';
import { ElNotification } from 'element-plus';
import router from '@/routers/index';

const modules = import.meta.glob('@/views/**/*.vue');

export const initDynamicRouter = async () => {
  const userStore = useUserStore();
  const authStore = useAuthStore();

  //获取菜单列表
  try {
    await authStore.getAuthMenuList();

    if (!authStore.authMenuList.length) {
      ElNotification({
        title: '无权限访问',
        message: '当前账号无任何菜单权限，请联系系统管理员！',
        type: 'warning',
        duration: 3000,
      });
      userStore.setToken('');
      router.replace('/login');
      return Promise.reject('No permission');
    }

    // 添加动态路由
    authStore.flatMenuListGet.forEach((item: any) => {
      if (item.component && typeof item.component === 'string') {
        item.component = modules[`/src/views${item.component}.vue`];
      }
      if (item.meta?.isFull) {
        router.addRoute(item);
      } else {
        router.addRoute('layout', item);
      }
    });
  } catch (error) {
    // 当请求出错时，重定向到登录页面
    userStore.setToken('');
    router.replace('/login');
    return Promise.reject(error);
  }
};
