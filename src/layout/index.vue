<!--
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-25 17:46:06
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-06-06 15:59:56
 * @description: 描述
-->
<template>
  <el-container class="layout">
    <el-container>
      <el-aside>
        <div class="aside-box" :style="{ width: isCollapse ? '65px' : '210px' }">
          <div class="logo">
            <img class="logo-img" src="@/assets/images/logo.svg" alt="logo" />
            <span v-show="!isCollapse" class="logo-text">Vue3-Admin</span>
          </div>
          <el-scrollbar>
            <el-menu
              :default-active="activeMenu"
              :router="false"
              :unique-opened="true"
              :collapse="isCollapse"
              :collapse-transition="false"
            >
              <SubMenu :menu-list="menuList" />
            </el-menu>
          </el-scrollbar>
        </div>
      </el-aside>
      <el-container>
        <el-header>
          <ToolBarLeft />
          <ToolBarRight />
        </el-header>
        <el-main><router-view></router-view></el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import { useAuthStore } from '@/store/modules/auth';
import { useGlobalStore } from '@/store/modules/global';
import { computed } from 'vue';
import SubMenu from './components/Menu/SubMenu.vue';
import ToolBarLeft from './components/Header/ToolBarLeft.vue';
import ToolBarRight from './components/Header/ToolBarRight.vue';

const authStore = useAuthStore();
const globalStore = useGlobalStore();

const isCollapse = computed(() => globalStore.isCollapse);
const menuList = computed(() => authStore.showMenuListGet);
const activeMenu = computed(() => authStore.routerName);
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
