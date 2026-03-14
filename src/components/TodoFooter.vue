<template>
  <footer v-if="todos.length" class="todo-footer">
    <input type="checkbox" :checked="allDone" @change="handleChange" />
    <span class="all-span">
      <span class="done-span">Completed:{{ doneCount }}</span>
      /All:{{ allCount }}</span
    >
    <button class="btn-color" @click="$emit('clear-done')">
      Remove Completed
    </button>
    <button class="btn-color" @click="$emit('clear-all')">󰧮 Clear</button>
  </footer>
  <h2 v-else class="empty">No Task!</h2>
  <div class="foot-info">
    <p>Click to Edit Task</p>
    <p>Written by LiQi</p>
    <p>
      Visual style inspired by Minecraft.Fan-made, non-commercial, for learning
      only.All rights go to Mojang.
    </p>
  </div>
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
  border-right: 3px solid #5C5958;
  cursor: default;
  box-shadow: 2px 4px 10px #222;
}
.todo-footer .all-span {
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: #ffc42b;
}
.todo-footer .all-span .done-span {
  color: #3c8527;
}
.todo-footer button {
  margin-left: 10px;
  padding: 2px 10px;
  cursor: pointer;
}
@keyframes empty-scale {
  0% {
    transform: rotate(-10deg) scale(1);
  }
  50% {
    transform: rotate(-10deg) scale(1.1);
  }
  100% {
    transform: rotate(-10deg) scale(1);
  }
}
.empty {
  width: 200px;
  margin:  10px auto;
  color: #ffff00;
  font-size: 40px;
  font-weight: 500;
  text-align: center;
  text-wrap: nowrap;
  text-shadow: 3px 3px 0 #3f3f00;
  transform: rotate(-10deg);
  animation: empty-scale 0.5s ease-in-out infinite;
  cursor: default;
}
.foot-info {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  text-align: center;
  color: #fff;
  text-wrap: nowrap;
}
</style>
