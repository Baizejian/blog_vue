<template>
  <div class="user-manager">
    <div class="header">
      <h2>用户管理</h2>
      <el-button type="primary" @click="openAddDialog">新增用户</el-button>
    </div>

    <el-table :data="userList" stripe style="width: 100%">
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="username" label="用户名" />
      <el-table-column prop="role" label="角色" />
      <el-table-column prop="email" label="邮箱" />
      <el-table-column prop="createTime" label="创建时间" width="180" />
      <el-table-column label="操作" width="200">
        <template #default="scope">
          <el-button size="small" @click="editUser(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="deleteUser(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹窗：新增/编辑用户 -->
    <el-dialog v-model="showDialog" :title="isEdit ? '编辑用户' : '新增用户'" width="500px">
      <el-form :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="角色">
          <el-select v-model="form.role" placeholder="请选择角色">
            <el-option label="管理员" value="admin" />
            <el-option label="编辑者" value="editor" />
            <el-option label="访客" value="guest" />
          </el-select>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email" />
        </el-form-item>
        <el-form-item label="密码" v-if="!isEdit">
          <el-input type="password" v-model="form.password" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showDialog = false">取消</el-button>
        <el-button type="primary" @click="saveUser">保存</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface User {
  id: number
  username: string
  role: string
  email: string
  password?: string
  createTime: string
}

const userList = ref<User[]>([
  {
    id: 1,
    username: 'admin',
    role: 'admin',
    email: 'admin@example.com',
    createTime: '2025-06-06',
  },
  {
    id: 2,
    username: 'editor01',
    role: 'editor',
    email: 'editor01@example.com',
    createTime: '2025-06-06',
  },
])

const showDialog = ref(false)
const isEdit = ref(false)
const form = ref<User>({
  id: 0,
  username: '',
  role: '',
  email: '',
  password: '',
  createTime: '',
})

const openAddDialog = () => {
  isEdit.value = false
  form.value = {
    id: 0,
    username: '',
    role: '',
    email: '',
    password: '',
    createTime: '',
  }
  showDialog.value = true
}

const editUser = (user: User) => {
  form.value = { ...user }
  isEdit.value = true
  showDialog.value = true
}

const deleteUser = (user: User) => {
  userList.value = userList.value.filter((u) => u.id !== user.id)
}

const saveUser = () => {
  if (isEdit.value) {
    const index = userList.value.findIndex((u) => u.id === form.value.id)
    if (index !== -1) {
      userList.value[index] = { ...form.value }
    }
  } else {
    const newId = userList.value.length ? Math.max(...userList.value.map((u) => u.id)) + 1 : 1
    const now = new Date().toISOString().split('T')[0]
    userList.value.push({ ...form.value, id: newId, createTime: now })
  }
  showDialog.value = false
  isEdit.value = false
}
</script>

<style scoped>
.user-manager {
  color: #eee;
}

.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.el-button {
  background-color: #333;
  color: #fff;
  border: none;
}
.el-button:hover {
  background-color: #00c853 !important;
}
</style>
