<template>
  <div class="article-manager">
    <div class="header">
      <h2>文章管理</h2>
      <el-button type="primary" @click="openAddDialog">新增文章</el-button>
    </div>

    <el-table :data="articleList" stripe style="width: 100%">
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="title" label="标题" />
      <el-table-column prop="category" label="分类" />
      <el-table-column prop="author" label="作者" />
      <el-table-column prop="createTime" label="创建时间" width="180" />
      <el-table-column label="操作" width="200">
        <template #default="scope">
          <el-button size="small" @click="editArticle(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="deleteArticle(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 新增 / 编辑文章弹窗 -->
    <el-dialog v-model="showDialog" :title="isEdit ? '编辑文章' : '新增文章'" width="600px">
      <el-form :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="分类">
          <el-select v-model="form.category" placeholder="选择分类">
            <el-option label="Java" value="Java" />
            <el-option label="前端" value="前端" />
            <el-option label="数据库" value="数据库" />
          </el-select>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="form.author" />
        </el-form-item>
        <el-form-item label="内容">
          <el-input type="textarea" v-model="form.content" :rows="5" placeholder="请输入文章内容" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showDialog = false">取消</el-button>
        <el-button type="primary" @click="saveArticle">保存</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Article {
  id: number
  title: string
  category: string
  author: string
  content: string
  createTime: string
}

const articleList = ref<Article[]>([
  {
    id: 1,
    title: 'Spring Boot 快速入门',
    category: 'Java',
    author: '小明',
    content: '这是文章内容...',
    createTime: '2025-06-06',
  },
  {
    id: 2,
    title: 'Vue3 组件通信',
    category: '前端',
    author: '小红',
    content: '这是文章内容...',
    createTime: '2025-06-06',
  },
])

const showDialog = ref(false)
const isEdit = ref(false)
const form = ref<Article>({
  id: 0,
  title: '',
  category: '',
  author: '',
  content: '',
  createTime: '',
})

const openAddDialog = () => {
  isEdit.value = false
  form.value = {
    id: 0,
    title: '',
    category: '',
    author: '',
    content: '',
    createTime: '',
  }
  showDialog.value = true
}

const editArticle = (article: Article) => {
  form.value = { ...article }
  isEdit.value = true
  showDialog.value = true
}

const deleteArticle = (article: Article) => {
  articleList.value = articleList.value.filter((a) => a.id !== article.id)
}

const saveArticle = () => {
  if (isEdit.value) {
    const index = articleList.value.findIndex((a) => a.id === form.value.id)
    if (index !== -1) {
      articleList.value[index] = { ...form.value }
    }
  } else {
    const newId = articleList.value.length ? Math.max(...articleList.value.map((a) => a.id)) + 1 : 1
    const now = new Date().toISOString().split('T')[0]
    articleList.value.push({ ...form.value, id: newId, createTime: now })
  }
  showDialog.value = false
  isEdit.value = false
}
</script>

<style scoped>
.article-manager {
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
