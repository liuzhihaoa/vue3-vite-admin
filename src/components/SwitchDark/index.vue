<!--
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-24 11:23:25
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-05-24 11:40:52
 * @description: 描述
-->
<template>
  <el-switch
    v-model="globalStore.isDark"
    :active-icon="Moon"
    :inactive-icon="Sunny"
    inline-prompt
    @change="switchDark"
  ></el-switch>
</template>
<script setup lang="ts">
import { Sunny, Moon } from '@element-plus/icons-vue';
import { useGlobalStore } from '@/store/modules/global';
import { useTheme } from '@/hook/useTheme';
const globalStore = useGlobalStore();
const { switchDark } = useTheme();
</script>
