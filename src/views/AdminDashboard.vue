<template>
  <div class="dashboard">
    <h2>欢迎来到后台管理系统</h2>
    <div class="stats">
      <el-card class="stat-card" shadow="hover">
        <div class="stat-title">文章总数</div>
        <div class="stat-value">128</div>
      </el-card>
      <el-card class="stat-card" shadow="hover">
        <div class="stat-title">分类总数</div>
        <div class="stat-value">12</div>
      </el-card>
      <el-card class="stat-card" shadow="hover">
        <div class="stat-title">用户总数</div>
        <div class="stat-value">54</div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
// 这里后续可以接接口获取数据
</script>

<style scoped>
.dashboard {
  color: #eee;
}

h2 {
  margin-bottom: 20px;
}

.stats {
  display: flex;
  gap: 20px;
}

.stat-card {
  flex: 1;
  background-color: #222;
  text-align: center;
  color: #00c853;
}

.stat-title {
  font-size: 16px;
  margin-bottom: 10px;
}

.stat-value {
  font-size: 28px;
  font-weight: bold;
}
</style>
