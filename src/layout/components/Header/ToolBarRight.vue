<!--
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-06-02 14:22:44
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-06-07 17:43:01
 * @description: 描述
-->
<template>
  <div class="tool-bar-right">
    <div class="header-icon">
      <AssemblySize />
      <Language />
      <SearchMenu />
      <ThemeSetting />
      <Message />
      <FullScreen />
    </div>
    <span class="username">{{ username }}</span>
    <Avatar />
  </div>
</template>
<script setup lang="ts">
import AssemblySize from './components/AssemblySize.vue';
import Language from './components/Language.vue';
import SearchMenu from './components/SearchMenu.vue';
import ThemeSetting from './components/ThemeSetting.vue';
import Message from './components/Message.vue';
import FullScreen from './components/FullScreen.vue';
import Avatar from './components/Avatar.vue';
import { useUserStore } from '@/store/modules/user';
import { computed } from 'vue';

const userStore = useUserStore();

const username = computed(() => userStore.userInfo.name);
</script>
<style scoped lang="scss">
.tool-bar-right {
  display: flex;
  align-items: center;
  justify-content: center;
  .header-icon {
    display: flex;
    align-items: center;
    & > * {
      margin-left: 21px;
    }
  }
  .username {
    margin: 0 20px;
    font-size: 15px;
  }
}
</style>
