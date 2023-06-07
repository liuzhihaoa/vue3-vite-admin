<template>
  <div class="tool-bar-left">
    <CollapeseIcon id="collapseIcon"></CollapeseIcon>
    <Breadcrumb />
  </div>
</template>
<script setup lang="ts">
import CollapeseIcon from './components/CollapeseIcon.vue';
import Breadcrumb from './components/Breadcrumb.vue';
</script>
<style scoped lang="scss">
.tool-bar-left {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
