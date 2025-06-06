<template>
  <div class="category-manager">
    <div class="header">
      <h2>分类管理</h2>
      <el-button type="primary" @click="showDialog = true">新增分类</el-button>
    </div>

    <el-table :data="categoryList" style="width: 100%" stripe>
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="name" label="分类名称" />
      <el-table-column prop="description" label="描述" />
      <el-table-column label="操作" width="180">
        <template #default="scope">
          <el-button size="small" @click="editCategory(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="deleteCategory(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹窗：新增或编辑分类 -->
    <el-dialog v-model="showDialog" :title="isEdit ? '编辑分类' : '新增分类'" width="400px">
      <el-form :model="form">
        <el-form-item label="名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="form.description" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showDialog = false">取消</el-button>
        <el-button type="primary" @click="saveCategory">保存</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Category {
  id: number
  name: string
  description: string
}

const categoryList = ref<Category[]>([
  { id: 1, name: 'Java', description: 'Java 技术相关' },
  { id: 2, name: '前端', description: 'Vue、HTML、CSS' },
])

const showDialog = ref(false)
const isEdit = ref(false)
const form = ref<Category>({
  id: 0,
  name: '',
  description: '',
})

const editCategory = (category: Category) => {
  form.value = { ...category }
  isEdit.value = true
  showDialog.value = true
}

const deleteCategory = (category: Category) => {
  categoryList.value = categoryList.value.filter((c) => c.id !== category.id)
}

const saveCategory = () => {
  if (isEdit.value) {
    const index = categoryList.value.findIndex((c) => c.id === form.value.id)
    if (index !== -1) {
      categoryList.value[index] = { ...form.value }
    }
  } else {
    const newId = categoryList.value.length
      ? Math.max(...categoryList.value.map((c) => c.id)) + 1
      : 1
    categoryList.value.push({ ...form.value, id: newId })
  }
  showDialog.value = false
  isEdit.value = false
  form.value = { id: 0, name: '', description: '' }
}
</script>

<style scoped>
.category-manager {
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
