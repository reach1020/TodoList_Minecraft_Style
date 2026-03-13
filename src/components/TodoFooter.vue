<template>
  <footer v-if="todos.length" class="todo-footer">
    <input type="checkbox" :checked="allDone" @change="handleChange"/>
    <span>完成事项{{doneCount}}/全部事项{{ allCount }}</span>
    <button @click="$emit('clear-done')">清除已办</button>
    <button @click="$emit('clear-all')">清除全部</button>
  </footer>
  <h2 v-else class="empty">暂无待办事项</h2>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  todos:{
    type:Array,
    default:()=>[],
  }
})
const emits = defineEmits(['toggle-all'])

const doneCount = computed(()=>{
  return props.todos.filter((todo)=>todo.done).length
})

const allDone = computed(()=>{
  return props.todos.every(todo=>todo.done)
})
const allCount = computed(()=>props.todos.length)

const handleChange = (event)=>{
  emits('toggle-all',event.target.checked)
}
</script>

<style scoped>
.todo-footer {
  margin-top: 20px;
  background-color: #87ceeb;
  display: flex;
  padding: 10px 40px;
}
.todo-footer span {
  flex: 1;
  margin-left: 20px;
}
.todo-footer button {
  margin-left: 10px;
  padding: 0 10px;
}
.empty{
  text-align: center;
  margin-top: 10px;
}
</style>
