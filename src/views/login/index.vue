<!--
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-23 11:18:53
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-05-23 16:43:42
 * @description: 描述
-->
<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-left">
        <img src="@/assets/images/login_left.png" alt="login" />
      </div>
      <div class="login-form">
        <div class="login-logo">
          <img class="login-icon" src="@/assets/images/logo.svg" alt="" />
          <h2 class="login-text">Vue3-Vite-Admin</h2>
        </div>
        <login-form></login-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import LoginForm from './components/LoginForm.vue';
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
