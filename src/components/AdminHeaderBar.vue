<template>
  <header class="header-bar">
    <div class="left">
      <span class="logo">Blog 管理后台</span>
    </div>
    <div class="right">
      <!-- 切换主题按钮 -->
      <el-button size="small" @click="toggleTheme" type="primary" plain> 切换背景 </el-button>

      <!-- 用户名 + 下拉菜单 -->
      <el-dropdown trigger="click">
        <span class="user-name">
          {{ username }}
          <el-icon><ArrowDown /></el-icon>
        </span>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleLogout">登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowDown } from '@element-plus/icons-vue'

const username = ref('管理员')
const router = useRouter()

const theme = ref('dark') // 默认主题

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', theme.value)
}

onMounted(() => {
  document.documentElement.setAttribute('data-theme', theme.value)
})

const handleLogout = () => {
  // TODO: 清理登录状态
  router.push('/login')
}
</script>

<style scoped>
.header-bar {
  height: 56px;
  background-color: var(--header-bg);
  color: var(--text-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  font-weight: bold;
  font-size: 18px;
  color: #90ee90;
}

.right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-name {
  cursor: pointer;
  display: flex;
  align-items: center;
  user-select: none;
}

.user-name:hover {
  color: #00c853;
}

.el-dropdown-menu {
  background-color: var(--dropdown-bg);
  color: var(--text-color);
}

.el-dropdown-menu__item:hover {
  background-color: #00c853;
  color: #121212;
}
</style>
