<!--
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-06-06 16:18:09
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-06-07 17:46:21
 * @description: 描述
-->
<template>
  <div class="breadcrumb-box">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item v-for="item of breadcrumbData" :key="item.path">
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span class="breadcrumb-title">{{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script setup lang="ts">
import { useAuthStore } from '@/store/modules/auth';
import { useRoute } from 'vue-router';
import { ArrowRight } from '@element-plus/icons-vue';
import { computed } from 'vue';

const route = useRoute();
const authStore = useAuthStore();
const breadcrumbData = computed(() => {
  const breadcrumbList = authStore.breadcrumbListGet[route.matched[route.matched.length - 1].path] ?? [];
  return breadcrumbList;
});
</script>
<style scoped lang="scss"></style>
