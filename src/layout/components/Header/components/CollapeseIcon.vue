<!--
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-06-02 14:24:12
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-06-06 11:49:01
 * @description: 描述
-->
<template>
  <el-icon class="collapse-icon" @click="changeCollapse">
    <component :is="globalStore.isCollapse ? 'expand' : 'fold'"></component>
  </el-icon>
</template>
<script setup lang="ts">
import { useGlobalStore } from '@/store/modules/global';
const globalStore = useGlobalStore();
//修改菜单的折叠状态
const changeCollapse = () => {
  globalStore.setGlobalState('isCollapse', !globalStore.isCollapse);
};
</script>
<style scoped lang="scss">
.collapse-icon {
  cursor: pointer;
  font-size: 22px;
}
</style>
