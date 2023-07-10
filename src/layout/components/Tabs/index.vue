<!--
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-06-09 11:48:28
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-06-09 16:41:22
 * @description: 描述
-->
<template>
  <div class="tabs-box">
    <div class="tabs-menu">
      <el-tabs v-model="tabsMenuValue" @tab-click="tabClick" @tab-remove="tabRemove" type="card">
        <el-tab-pane
          v-for="item of tabsMenuList"
          :key="item.path"
          :label="item.title"
          :name="item.path"
          :closable="item.close"
        >
          <template #label>
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.title }}</span>
          </template>
        </el-tab-pane>
      </el-tabs>
      <MoreButtons />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useTabsStore } from '@/store/modules/tabs';
import { useAuthStore } from '@/store/modules/auth';
import { computed, watch, ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { TabsPaneContext, TabPaneName } from 'element-plus';
import MoreButtons from './components/MoreButtons.vue';

const tabsStore = useTabsStore();
const authStore = useAuthStore();
const route = useRoute();
const router = useRouter();

const tabsMenuValue = ref(route.fullPath);

const tabsMenuList = computed(() => tabsStore.tabsMenuList);

onMounted(() => {
  initTabs();
});

// 监听路由变化
watch(
  () => route.fullPath,
  () => {
    if (route.meta.isFull) return;
    tabsMenuValue.value = route.fullPath;
    const tabsParams = {
      icon: route.meta.icon as string,
      title: route.meta.title as string,
      path: route.fullPath,
      name: route.name as string,
      close: !route.meta.isAffix,
    };
    tabsStore.addTabs(tabsParams);
  },
);

// 初始化需要固定的tab
const initTabs = () => {
  for (const item of authStore.flatMenuListGet) {
    if (item.meta.isAffix && !item.meta.isHide && !item.meta.isFull) {
      const tabsParams = {
        icon: item.meta.icon,
        title: item.meta.title,
        path: item.path,
        name: item.name,
        close: !item.meta.isAffix,
      };
      tabsStore.addTabs(tabsParams);
    }
  }
};
// click tab
const tabClick = (item: TabsPaneContext) => {
  const fullPath = item.props.name as string;
  router.push(fullPath);
};
// remove tab
const tabRemove = (fullPath: TabPaneName) => {
  tabsStore.removeTabs(fullPath as string, route.fullPath === fullPath);
};
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
