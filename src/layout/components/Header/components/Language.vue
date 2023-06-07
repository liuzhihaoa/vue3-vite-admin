<template>
  <el-dropdown trigger="click" @command="changeLanguage">
    <i :class="'iconfont icon-zhongyingwen'" class="toolBar-icon"></i>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item of languageList"
          :key="item.value"
          :command="item.value"
          :disabled="item.value === language"
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useGlobalStore } from '@/store/modules/global';
import { LanguageType } from '@/store/interface';

const globalStore = useGlobalStore();
const language = computed(() => globalStore.language);

const languageList = [
  { label: '简体中文', value: 'zh' },
  { label: 'English', value: 'en' },
];

const changeLanguage = (value: LanguageType) => {
  globalStore.setGlobalState('language', value);
};
</script>
<style scoped lang="scss"></style>
