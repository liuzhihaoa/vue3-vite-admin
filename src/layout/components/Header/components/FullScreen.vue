<!--
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-06-07 16:55:58
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-06-07 17:20:22
 * @description: 描述
-->
<template>
  <div class="fullscreen">
    <i :class="['iconfont', isFullscreen ? 'icon-suoxiao' : 'icon-fangda']" class="toolBar-icon" @click="toggle"></i>
  </div>
</template>
<script setup lang="ts">
import { useFullscreen } from '@vueuse/core';
const { isFullscreen, toggle } = useFullscreen();
</script>
<style scoped lang="scss"></style>
