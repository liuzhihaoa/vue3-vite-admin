<!--
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-23 17:41:39
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-06-07 11:52:34
 * @description: 描述
-->
<template>
  <el-config-provider :size="assemblySize">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from '@/hook/useTheme';
import { useGlobalStore } from '@/store/modules/global';

const globalStore = useGlobalStore();
const { initTheme } = useTheme();
// element assemblySize
const assemblySize = computed(() => globalStore.assemblySize);
// 初始化主题
initTheme();
</script>
