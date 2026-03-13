<template>
  <TodoHeader @addTodo="handleAdd"/>
  <TodoList :todos="todos" />
  <TodoFooter />
</template>

<script setup>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/Todolist.vue'
import TodoFooter from './components/TodoFooter.vue'
import { ref } from 'vue'

const todos = ref([])

function handleAdd(todo){
  todos.value.push(todo)
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
