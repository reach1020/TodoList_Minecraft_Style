<template>
  <TodoHeader @addTodo="handleAdd" />
  <TodoList>
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      v-bind="todo"
      @toggle="handleToggle"
      @update="handleUpdate"
      @delete="handleDelete"
    />
  </TodoList>
  <TodoFooter />
</template>

<script setup>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/Todolist.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoItem from './components/TodoItem.vue'
import { ref } from 'vue'

const todos = ref([])

function handleAdd(todo) {
  todos.value.push(todo)
}
// 与上面相比,可以避免函数提升
const handleToggle = (id, checked) => {
  const todo = todos.value.find((todo) => todo.id === id)
  todo.done = checked
}

const handleUpdate = (id, content) => {
   const todo = todos.value.find((todo) => todo.id === id)
   todo.content = content
}

const handleDelete = (id) => {
  const index = todos.value.findIndex((todo) => todo.id === id)
  todos.value.splice(index,1)
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
