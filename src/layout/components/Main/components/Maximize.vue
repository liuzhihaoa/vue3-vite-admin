<!--
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-07-10 17:38:27
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-07-10 17:56:04
 * @description: 描述
-->
<template>
  <div class="maximize" @click="exitMaximize">
    <el-icon><Close /></el-icon>
  </div>
</template>
<script setup lang="ts">
import { useGlobalStore } from '@/store/modules/global';
const globalStore = useGlobalStore();
const exitMaximize = () => {
  globalStore.setGlobalState('maximize', false);
};
</script>
<style scoped lang="scss">
.maximize {
  position: fixed;
  width: 52px;
  height: 52px;
  cursor: pointer;
  border-radius: 50%;
  background-color: var(--el-color-info);
  right: -25px;
  top: -25px;
  .el-icon {
    position: relative;
    top: 68%;
    left: 32%;
    transform: translate((-50%, -50%));
    color: #fff;
  }
}
</style>
