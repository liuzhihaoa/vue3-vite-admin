<template>
  <el-dropdown>
    <div class="avatar">
      <img src="@/assets/images/avatar.gif" alt="avatar" />
    </div>
  </el-dropdown>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
