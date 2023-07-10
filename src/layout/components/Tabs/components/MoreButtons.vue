<!--
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-06-09 16:24:32
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-07-10 17:32:27
 * @description: 描述
-->
<template>
  <el-dropdown trigger="click">
    <el-button>
      <span>更多</span>
      <el-icon>
        <ArrowDown />
      </el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="refresh">
          <el-icon><Refresh /></el-icon>刷新
        </el-dropdown-item>
        <el-dropdown-item @click="maximize">
          <el-icon><FullScreen /></el-icon>最大化
        </el-dropdown-item>
        <el-dropdown-item>
          <el-icon><Remove /></el-icon>关闭当前
        </el-dropdown-item>
        <el-dropdown-item>
          <el-icon><CircleClose /></el-icon>关闭其他
        </el-dropdown-item>
        <el-dropdown-item>
          <el-icon><FolderDelete /></el-icon>关闭所有
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">
import { inject, nextTick } from 'vue';
import { useGlobalStore } from '@/store/modules/global';

const globalStore = useGlobalStore();
// refresh current page
const refreshCurrentPage: Function = inject('refresh');
const refresh = async () => {
  refreshCurrentPage(false);
  await nextTick();
  refreshCurrentPage(true);
};

// maximize current page
const maximize = () => {
  globalStore.setGlobalState('maximize', true);
};
</script>
<style scoped lang="scss">
@import '../index.scss';
</style>
