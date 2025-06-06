<template>
  <div class="login-container">
    <el-card class="login-card">
      <h2 class="title">Blog 管理后台</h2>
      <el-form :model="form" @submit.prevent="onLogin">
        <el-form-item>
          <el-input v-model="form.username" placeholder="用户名" clearable autofocus />
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" type="password" placeholder="密码" clearable />
        </el-form-item>
        <el-button type="primary" class="login-button" @click="onLogin">登录</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

defineOptions({ name: 'LoginView' }) // ✅ 正确方式命名组件

const router = useRouter()
const form = ref({ username: '', password: '' })

const onLogin = () => {
  if (form.value.username && form.value.password) {
    router.push('/admin/dashboard')
  }
}
</script>

<style scoped>
.login-container {
  background-color: #121212;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-card {
  width: 350px;
  padding: 30px;
  background-color: #1e1e1e;
  color: #eee;
}
.title {
  text-align: center;
  color: #90ee90;
  margin-bottom: 20px;
}
.login-button {
  width: 100%;
  background-color: #333;
  border: none;
  color: white;
  transition: background-color 0.3s;
}
.login-button:hover {
  background-color: #00c853;
}
</style>
