<!--
 * @Author: liuzhihao
 * @email: liuzhihao@hatech.com.cn
 * @Date: 2023-06-07 14:56:11
 * @LastEditors: liuzhihao
 * @LastEditTime: 2023-06-07 16:41:54
 * @description: 描述
-->
<template>
  <div class="menu-search">
    <i :class="'iconfont icon-sousuo'" class="toolBar-icon" @click="handleOpen"></i>
    <el-dialog v-model="isShowSearch" fullscreen destroy-on-close :show-close="false" @click="closeSearch">
      <el-autocomplete
        v-model="searchMenu"
        ref="menuInputRef"
        value-key="path"
        placeholder="菜单搜索:支持菜单名称、路径"
        :fetch-suggestions="searchMenuList"
        clearable
        @select="handleClickMenu"
        @click.stop
      >
        <template #prefix>
          <el-icon>
            <Search />
          </el-icon>
        </template>
        <template #default="{ item }">
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-autocomplete>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/modules/auth';
import { ref, computed, nextTick } from 'vue';
import { Search } from '@element-plus/icons-vue';

const router = useRouter();
const authStore = useAuthStore();
const menuList = computed(() => authStore.flatMenuListGet.filter((item) => !item.meta.isHide));

//打开搜索模态框
const isShowSearch = ref(false);
const searchMenu = ref<string>('');
const menuInputRef = ref();
const handleOpen = () => {
  isShowSearch.value = true;
  nextTick(() => {
    menuInputRef.value.focus();
  });
};
const searchMenuList = (queryString: string, cb: Function) => {
  const results = queryString ? menuList.value.filter(filterNodeMethod(queryString)) : menuList.value;
  cb(results);
};

//筛选菜单
const filterNodeMethod = (queryString: string) => {
  return (restaurant: Menu.MenuOptions) => {
    return (
      restaurant.path.toLowerCase().includes(queryString.toLowerCase()) ||
      restaurant.meta.title.toLowerCase().includes(queryString.toLowerCase())
    );
  };
};
//点击下拉选项跳转菜单
const handleClickMenu = (menuItem: Menu.MenuOptions) => {
  searchMenu.value = '';
  if (menuItem.meta.isLink) window.open(menuItem.meta.isLink, '_blank');
  else router.push(menuItem.path);
  closeSearch();
};

//关闭搜索模态框
const closeSearch = () => (isShowSearch.value = false);
</script>
<style scoped lang="scss">
.menu-search {
  :deep(.el-dialog) {
    background-color: rgb(0 0 0/50%);
    border-radius: 0 !important;
    box-shadow: unset !important;
    .el-dialog__header {
      border-bottom: none !important;
    }
  }
  :deep(.el-autocomplete) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 550px;
    .el_input__wrapper {
      background-color: var(--el-bg-color);
    }
  }
}
.el-autocomplete__popper {
  .el-icon {
    position: relative;
    top: 2px;
    font-size: 16px;
  }
  span {
    margin: 0 0 0 10px;
    font-size: 14px;
  }
}
</style>
