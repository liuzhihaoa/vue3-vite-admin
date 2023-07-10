<!--
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-06-06 16:18:09
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-06-09 16:16:48
 * @description: 描述
-->
<template>
  <div class="breadcrumb-box">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item v-for="(item, index) of breadcrumbList" :key="item.path">
        <div class="el-breadcrumb__inner is-link" @click="onBreadcrumbClick(item, index)">
          <el-icon class="breadcrumb-icon">
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span class="breadcrumb-title">{{ item.meta.title }}</span>
        </div>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script setup lang="ts">
import { useAuthStore } from '@/store/modules/auth';
import { useRoute } from 'vue-router';
import { ArrowRight } from '@element-plus/icons-vue';
import { computed } from 'vue';
import router from '@/routers';

const route = useRoute();
const authStore = useAuthStore();
const breadcrumbList = computed(() => {
  const breadcrumbData = authStore.breadcrumbListGet[route.matched[route.matched.length - 1].path] ?? [];
  return breadcrumbData;
});

// Click Breadcrumb
const onBreadcrumbClick = (item: Menu.MenuOptions, index: number) => {
  if (index !== breadcrumbList.value.length - 1) router.push(item.path);
};
</script>
<style scoped lang="scss">
.breadcrumb-box {
  display: flex;
  align-items: center;
  padding-right: 50px;
  overflow: hidden;
  mask-image: linear-gradient(90deg, #000000 0%, #000000 calc(100% - 50px), transparent);
  .el-breadcrumb {
    white-space: nowrap;
    .el-breadcrumb__item {
      position: relative;
      display: inline-block;
      float: none;
      .el-breadcrumb__inner {
        display: inline-flex;
        .breadcrumb-icon {
          margin-top: 2px;
          margin-right: 6px;
          font-size: 16px;
        }
        .breadcrumb-title {
          margin-top: 3px;
        }
      }
      :deep(.el-breadcrumb__separator) {
        position: relative;
        top: -1px;
      }
    }
  }
}
.no-icon {
  .el-breadcrumb {
    .el-breadcrumb__item {
      top: -2px;
      :deep(.el-breadcrumb__separator) {
        top: 2px;
      }
    }
  }
}
</style>
