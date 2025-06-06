<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="welcome-container">
    <!-- 导航栏 -->
    <header class="navbar">
      <div class="nav-container">
        <RouterLink to="/" class="home-link">首页</RouterLink>
        <div class="nav-links">
          <RouterLink to="/java">Java</RouterLink>
          <!-- 可以继续添加更多分类链接 -->
        </div>
      </div>
    </header>

    <!-- 主内容区 -->
    <main class="main-content">
      <!-- 图片区域 -->
      <div class="image-placeholder">
        <h1>欢迎来到学习平台</h1>
        <p>这里将放置一张有吸引力的图片</p>
      </div>

      <!-- 按钮区域 -->
      <div class="action-buttons">
        <RouterLink to="/java" class="btn btn-primary">开始学习</RouterLink>
        <RouterLink to="/contact" class="btn btn-secondary">联系我们</RouterLink>
      </div>
    </main>
  </div>
</template>

<style scoped>
.welcome-container {
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow-x: hidden; /* 关键：禁止横向溢出 */
}

/* 导航栏样式 */
.navbar {
  background-color: var(--color-background-soft);
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.nav-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.home-link {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.navbar a {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.navbar a:hover {
  background-color: #4caf50; /* 绿色悬停效果 */
  color: white;
}

.navbar a.router-link-exact-active {
  color: white;
  background-color: #4caf50; /* 绿色活动状态 */
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
}

.image-placeholder {
  margin: 2rem 0;
  width: 100%;
  max-width: 800px;
  height: 300px;
  background-color: var(--color-background-mute);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
}

.image-placeholder h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--color-heading);
}

.image-placeholder p {
  color: var(--color-text-soft);
}

.action-buttons {
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
}

.btn {
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: #4caf50; /* 绿色按钮 */
  color: white;
}

.btn-primary:hover {
  background-color: #45a049; /* 深绿色悬停 */
}

.btn-secondary {
  border: 1px solid #4caf50;
  color: #4caf50;
}

.btn-secondary:hover {
  background-color: #e8f5e9; /* 浅绿色悬停 */
}

@media (width: 100%) {
  .action-buttons {
    flex-direction: column;
    width: 100%;
  }

  .btn {
    width: 100%;
    text-align: center;
  }

  .image-placeholder {
    height: 200px;
  }

  .nav-container {
    flex-direction: column;
    padding: 1rem;
  }

  .nav-links {
    margin-top: 1rem;
  }
}
</style>
