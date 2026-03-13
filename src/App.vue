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
  <TodoFooter
    :todos="todos"
    @toggle-all="handleChangeAll"
    @clear-done="handleClearDone"
    @clear-all="handleClearAll"
  />
</template>

<script setup>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/Todolist.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoItem from './components/TodoItem.vue'
import { ref, watch, onMounted } from 'vue'

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
  todos.value.splice(index, 1)
}

const handleChangeAll = (checked) => {
  // 使用传递的value值,更新所有todo的done属性
  todos.value.forEach((todo) => {
    todo.done = checked
  })
}

const handleClearDone = () => {
  // 过滤出未完成元素
  todos.value = todos.value.filter((todo) => !todo.done)
}
const handleClearAll = () => {
  // todos.value.length = 0
  todos.value = []
}

watch(
  todos,
  () => {
    localStorage.setItem('todos', JSON.stringify(todos.value))
  },
  { deep: true },
)

onMounted(()=>{
  const savedTodos = localStorage.getItem('todos')
  if(savedTodos){
    todos.value = JSON.parse(savedTodos)
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
