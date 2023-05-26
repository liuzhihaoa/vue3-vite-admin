<!--
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-23 17:41:39
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-05-26 11:19:05
 * @description: 描述
-->
<script setup lang="ts">
import { useTheme } from '@/hook/useTheme';
const { initTheme } = useTheme();
// 初始化主题
initTheme();
</script>

<template>
  <el-config-provider>
    <router-view></router-view>
  </el-config-provider>
</template>
