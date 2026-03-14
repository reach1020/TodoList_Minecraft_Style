<template>
  <footer v-if="todos.length" class="todo-footer">
    <input type="checkbox" id="toggle-all" :checked="allDone" @change="handleChange" />
    <label for="toggle-all" class="label-checkbox"></label>
    <span class="all-span">
      <span class="done-span">Completed:{{ doneCount }}</span>
      /All:{{ allCount }}</span
    >
    <button class="btn-color" @click="$emit('clear-done')">
      Remove Completed
    </button>
    <button class="btn-color" @click="$emit('clear-all')">󰧮 Clear</button>
  </footer>
  <p v-else class="scale-text">No Task!</p>
  <div class="foot-info">
    <p>Written by Reach</p>
    <p>Visual style inspired by Minecraft.Fan-made, non-commercial, for learning only.</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// 定义props接收从父组件传递过来的todos数组
const props = defineProps({
  todos: {
    type: Array,
    default: () => [],
  },
})
// 定义自定义事件
const emits = defineEmits(['toggle-all', 'clear-done', 'clear-all'])

/**
 * 计算属性:计算已完成任务数量
 */
const doneCount = computed(() => {
  return props.todos.filter((todo) => todo.done).length
})
/**
 * 计算属性:计算是否所有任务都已完成
 */
const allDone = computed(() => {
  return props.todos.every((todo) => todo.done)
})
/**
 * 计算属性:计算所有任务数量
 */
const allCount = computed(() => props.todos.length)

/**
 * 事件处理函数:处理全选复选框变化事件
 * @param event 事件对象
 */
const handleChange = (event) => {
  emits('toggle-all', event.target.checked)
}
</script>

<style scoped>
/* 任务列表页脚样式 */
.todo-footer {
  position: relative;
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

/* 全选复选框样式增加 */
.label-checkbox{
  top:23px
}
/* All文字样式 */
.todo-footer .all-span {
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 20px;
  color: #ffc42b;
}
/* Completed文字样式 */
.todo-footer .all-span .done-span {
  color: #3c8527;
}

/* 按钮样式 */
.todo-footer button {
  margin-left: 10px;
  padding: 2px 10px;
  cursor: pointer;
}

/* 页脚信息样式 */
.foot-info {
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  text-wrap: nowrap;
  text-shadow: 1px 2px 0 #222;
}
</style>
