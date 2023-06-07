<!--
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-06-07 16:44:08
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-06-07 16:54:25
 * @description: 描述
-->
<template>
  <div class="message">
    <el-popover placement="bottom" :width="310" trigger="click">
      <template #reference>
        <el-badge :value="5" class="item">
          <i :class="'iconfont icon-xiaoxi'" class="toolBar-icon"></i>
        </el-badge>
      </template>
      <el-tabs v-model="activeName">
        <el-tab-pane label="通知(5)" name="notice">
          <div class="message-list">
            <div class="message-item">
              <img src="@/assets/images/msg01.png" alt="" class="message-icon" />
              <div class="message-content">
                <span class="message-title">一键三连 Geeker-Admin 🧡</span>
                <span class="message-date">一分钟前</span>
              </div>
            </div>
            <div class="message-item">
              <img src="@/assets/images/msg02.png" alt="" class="message-icon" />
              <div class="message-content">
                <span class="message-title">一键三连 Geeker-Admin 💙</span>
                <span class="message-date">一小时前</span>
              </div>
            </div>
            <div class="message-item">
              <img src="@/assets/images/msg03.png" alt="" class="message-icon" />
              <div class="message-content">
                <span class="message-title">一键三连 Geeker-Admin 💚</span>
                <span class="message-date">半天前</span>
              </div>
            </div>
            <div class="message-item">
              <img src="@/assets/images/msg04.png" alt="" class="message-icon" />
              <div class="message-content">
                <span class="message-title">一键三连 Geeker-Admin 💜</span>
                <span class="message-date">一星期前</span>
              </div>
            </div>
            <div class="message-item">
              <img src="@/assets/images/msg05.png" alt="" class="message-icon" />
              <div class="message-content">
                <span class="message-title">一键三连 Geeker-Admin 💛</span>
                <span class="message-date">一个月前</span>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="消息(0)" name="message">
          <div class="message-empty">
            <img src="@/assets/images/notData.png" alt="notData" />
            <div>暂无消息</div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="代办(0)" name="third">
          <div class="message-empty">
            <img src="@/assets/images/notData.png" alt="notData" />
            <div>暂无代办</div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-popover>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const activeName = ref('notice');
</script>
<style scoped lang="scss"></style>
