<template>
  <div class="admin-layout">
    <AdminSidebar />
    <div class="main-content">
      <AdminHeaderBar />
      <div class="router-view-wrapper">
        <router-view />
        <!-- 子路由的入口 -->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import AdminSidebar from '../components/AdminSidebar.vue'
import AdminHeaderBar from '../components/AdminHeaderBar.vue'
</script>

<style scoped>
.admin-layout {
  display: flex;
  height: 100vh;
  background-color: #121212;
  color: #eee;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.router-view-wrapper {
  flex: 1;
  padding: 20px;
  background-color: var(--card-color); /* ⬅ 页面主要区域背景 */
}
</style>
