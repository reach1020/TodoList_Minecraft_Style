<template>
  <header class="todo-header">
    <h2>TodoList</h2>
    <div class="add-todo">
      <input
        type="text"
        placeholder="请输入待办事项"
        v-model.trim="content"
        @keyup.enter="addTodo"
      />
      <button @click="addTodo">添加</button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const content = ref('')
const emits = defineEmits(['addTodo'])

function addTodo(){
  // 1. 校验输入内容是否为空
  if(!content.value){
    alert('请输入待办事项')
    return
  }
  // 2.组装
  const todo = {
    id: Date.now(),
    content:content.value,
    done:false,
  }
  // 3.发送数组给app组件
  emits('addTodo',todo)
  // 4. 清空输入框
  content.value = ''
}
</script>

<style scoped>
.todo-header {
  padding: 5px 0 10px;
  background-color: #0b87ff;
  color: #f0f8ff;
  text-align: center;
}
.todo-header h1 {
  font-size: 24px;
}
.todo-header .add-todo {
  margin-top: 10px;
  display: flex;
  gap: 5px;
  justify-content: center;
}
.todo-header .add-todo input {
  width: 300px;
  height: 30px;
  padding: 0 10px;
  border-radius: 3px;
  outline: none;
  border: solid 1px white;
}
.todo-header .add-todo button {
  display: inline-block;
  width: 80px;
  background-color: #eee;
  color: #0b87ff;
  line-height: 30px;
  border: none;
  border-radius: 3px;
}
.todo-header .add-todo button:hover {
  cursor: pointer;
  background-color: #fff;
  color: #ff6700;
}
</style>
