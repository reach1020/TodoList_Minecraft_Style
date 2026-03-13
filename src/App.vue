<template>
  <TodoHeader />
  <TodoList />
  <TodoFooter />
</template>

<script setup>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/Todolist.vue'
import TodoFooter from './components/TodoFooter.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
