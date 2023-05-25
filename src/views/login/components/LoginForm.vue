<!--
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-05-23 11:55:07
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-05-25 16:55:22
 * @description: 描述
-->
<template>
  <el-form ref="loginFormRef" :model="loginForm" size="large" :rules="loginRules">
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="用户名：">
        <template #prefix>
          <el-icon class="el-input_icon"><User /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="loginForm.password" type="password" placeholder="密码" show-password>
        <template #prefix>
          <el-icon class="el-input_icon"><Lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
  <div class="login-btn">
    <el-button :icon="CloseBold" round size="large" @click="resetForm(loginFormRef)">重置</el-button>
    <el-button :icon="UserFilled" type="primary" round size="large" :loading="loading" @click="login(loginFormRef)"
      >登录</el-button
    >
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';
import { ElNotification } from 'element-plus';
import type { ElForm } from 'element-plus';
import { loginApi } from '@/api/modules/login';
import { CloseBold, UserFilled } from '@element-plus/icons-vue';
import MD5 from 'js-md5';
import { useUserStore } from '@/store/modules/user';
import { useRouter } from 'vue-router';

const router = useRouter();
const useStore = useUserStore();
type FormInstance = InstanceType<typeof ElForm>;
const loginFormRef = ref<FormInstance>();
const loginRules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ require: true, message: '请输入密码', trigger: blur }],
});
const loginForm = reactive({
  username: '',
  password: '',
});
const loading = ref<boolean>(false);
//login
const login = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (!valid) return;
    loading.value = true;
    try {
      const { data } = await loginApi({ ...loginForm, password: MD5(loginForm.password) });
      useStore.setToken(data.access_token);
      router.push('/home/index');
      ElNotification({
        message: '欢迎登录 Admin',
        type: 'success',
        duration: 3000,
      });
    } finally {
      loading.value = false;
    }
  });
};
//resetForm
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
<style scoped lang="scss">
@import '../index.scss';
</style>
