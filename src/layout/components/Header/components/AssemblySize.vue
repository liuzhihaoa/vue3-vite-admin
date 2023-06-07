<template>
  <el-dropdown trigger="click" @command="setAssemblySize">
    <i class="iconfont icon-contentright toolBar-icon"></i>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item of assemblySizeList"
          :key="item.value"
          :command="item.value"
          :disabled="assemblySize === item.value"
        >
          {{ item.label }}</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useGlobalStore } from '@/store/modules/global';
import { AssemblySizeType } from '@/store/interface';

const globalStore = useGlobalStore();
const assemblySize = computed(() => globalStore.assemblySize);

const assemblySizeList = [
  { label: '默认', value: 'default' },
  { label: '大型', value: 'large' },
  { label: '小型', value: 'small' },
];

const setAssemblySize = (value: AssemblySizeType) => {
  if (value === assemblySize.value) return;
  globalStore.setGlobalState('assemblySize', value);
};
</script>
<style scoped lang="scss"></style>
