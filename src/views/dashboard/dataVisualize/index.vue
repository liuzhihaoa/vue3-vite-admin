<!--
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-06-08 15:20:17
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-06-08 15:32:56
 * @description: 描述
-->
<template>
  <div class="dataVisualize-box">
    <div class="top-box">
      <el-tabs v-model="tabActive" class="demo-tab">
        <el-tab-pane v-for="item of tab" :key="item.name" :label="item.label" :name="item.name"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const tabActive = ref(1);

const tab = [
  { label: '未来7日', name: 1 },
  { label: '近七日', name: 2 },
  { label: '近一月', name: 3 },
  { label: '近三月', name: 4 },
  { label: '近半年', name: 5 },
  { label: '近一年', name: 6 },
];
</script>
<style scoped lang="scss"></style>
