<template>
  <footer v-if="todos.length" class="todo-footer">
    <input type="checkbox" :checked="allDone" @change="handleChange" />
    <span class="all-span">
      <span class="done-span">Completed:{{ doneCount }}</span>
      /All:{{ allCount }}</span>
    <button class="btn-color" @click="$emit('clear-done')"> Remove Completed</button>
    <button class="btn-color" @click="$emit('clear-all')">󰧮 Clear</button>
  </footer>
  <h2 v-else class="empty">no tasks</h2>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  todos: {
    type: Array,
    default: () => [],
  },
})
const emits = defineEmits(['toggle-all', 'clear-done', 'clear-all'])

const doneCount = computed(() => {
  return props.todos.filter((todo) => todo.done).length
})

const allDone = computed(() => {
  return props.todos.every((todo) => todo.done)
})
const allCount = computed(() => props.todos.length)

const handleChange = (event) => {
  emits('toggle-all', event.target.checked)
}
</script>

<style scoped>
.todo-footer {
  display: flex;
  padding: 10px 30px;
  margin: 0 auto;
  margin-bottom: 40px;
  width: 800px;
  background: #2f2d2c;
  border-right: 4px solid #3d3938;
  cursor: default;
}
.todo-footer .all-span {
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: #FFC42B;
}
.todo-footer .all-span .done-span{
  color: #3C8527;
}
.todo-footer button {
  margin-left: 10px;
  padding: 2px 10px;
  cursor: pointer;
}
.todo-footer button:hover{
  border: solid 2px #272524;
}
.empty {
  text-align: center;
  margin-top: 10px;
}
</style>
