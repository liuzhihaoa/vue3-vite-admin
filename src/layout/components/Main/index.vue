<!--
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-06-07 18:05:30
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-07-10 17:56:38
 * @description: 描述
-->
<template>
  <Maximize v-if="maximize" />
  <Tabs />
  <el-main>
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in" appear>
        <component :is="Component" :key="route.fullPath" v-if="isRouterShow"></component>
      </transition>
    </router-view>
  </el-main>
</template>
<script setup lang="ts">
import { ref, onBeforeUnmount, provide, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/store/modules/global';
import { useDebounceFn } from '@vueuse/core';
import Tabs from '../Tabs/index.vue';
import Maximize from './components/Maximize.vue';

const globalStore = useGlobalStore();
const { isCollapse, maximize } = storeToRefs(globalStore);

// 注入刷新页面的方法
const isRouterShow = ref(true);
const refreshCurrentPage = (val: boolean) => {
  isRouterShow.value = val;
};
provide('refresh', refreshCurrentPage);

// 监听当前页面是否是最大化，动态添加class
watch(
  () => maximize.value,
  () => {
    const app = document.getElementById('app');
    if (maximize.value) app.classList.add('main-maximize');
    else app.classList.remove('main-maximize');
  },
  { immediate: true },
);
// 监听窗口变化，折叠侧边栏
const screenWidth = ref(0);
const listeningWindow = useDebounceFn(() => {
  screenWidth.value = document.body.clientWidth;
  if (!isCollapse.value && screenWidth.value < 1200) globalStore.setGlobalState('isCollapse', true);
  if (isCollapse.value && screenWidth.value >= 1200) globalStore.setGlobalState('isCollapse', false);
}, 100);
window.addEventListener('resize', listeningWindow, false);
// 组件销毁时清除监听
onBeforeUnmount(() => {
  window.removeEventListener('resize', listeningWindow);
});
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
