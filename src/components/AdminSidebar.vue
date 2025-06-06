<template>
  <el-menu
    :default-active="activeMenu"
    class="sidebar-menu"
    router
    unique-opened
    background-color="#1e1e1e"
    text-color="#bfcbd9"
    active-text-color="#00c853"
    :collapse="isCollapse"
    @select="handleSelect"
  >
    <el-menu-item index="/admin">
      <el-icon><HomeFilled /></el-icon>
      <span>仪表盘</span>
    </el-menu-item>
    <el-sub-menu index="category">
      <template #title>
        <el-icon><Folder /></el-icon>
        <span>分类管理</span>
      </template>
      <el-menu-item index="/admin/category">分类列表</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="article">
      <template #title>
        <el-icon><Document /></el-icon>
        <span>文章管理</span>
      </template>
      <el-menu-item index="/admin/article">文章列表</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/admin/user">
      <el-icon><User /></el-icon>
      <span>用户管理</span>
    </el-menu-item>
    <el-menu-item index="/admin/settings">
      <el-icon><Setting /></el-icon>
      <span>设置</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { HomeFilled, Folder, Document, User, Setting } from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()

const activeMenu = ref(route.path)
const isCollapse = ref(false)

watch(
  () => route.path,
  (newPath) => {
    activeMenu.value = newPath
  },
)

const handleSelect = (index: string) => {
  console.log('菜单点击:', index)
  router.push(index)
}
</script>

<style scoped>
.sidebar-menu {
  height: 100vh;
  border-right: none;
  background-color: #1e1e1e;
  color: #bfcbd9;
}

.el-menu-item:hover {
  color: #00c853 !important;
}

.el-sub-menu__title:hover {
  color: #00c853 !important;
}
</style>
