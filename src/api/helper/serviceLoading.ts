/*
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-24 16:18:47
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-05-24 16:51:25
 * @description: 描述
 */
import { ElLoading } from 'element-plus';

class AxiosLoading {
  private needLoadingRequestCount: number;
  private loadingInstance: ReturnType<typeof ElLoading.service>;
  constructor() {
    this.needLoadingRequestCount = 0;
    this.loadingInstance = '' as any;
  }
  addLoading() {
    if (this.needLoadingRequestCount === 0) {
      this.loadingInstance = ElLoading.service({
        fullscreen: true,
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
      });
    }
    this.needLoadingRequestCount++;
  }
  closeLoading() {
    if (this.needLoadingRequestCount > 0) {
      this.loadingInstance.close();
    }
    this.needLoadingRequestCount--;
  }
}
export default new AxiosLoading();
