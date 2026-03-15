<template>
  <footer v-if="todos.length" class="todo-footer">
    <div class="footer-content">
      <input
        type="checkbox"
        id="toggle-all"
        :checked="allDone"
        @change="handleChange"
      />
      <label for="toggle-all" class="label-checkbox"></label>
      <span
        class="done-span"
        :class="{ active: doneCount > 0 && doneCount < allCount }"
        @click="handleFilterDone"
        >Completed:{{ doneCount }}
      </span>
      <!-- 当折叠了任务时,显示感叹号 -->
      <span v-show="isFilteredDone" class="active-icon">!</span>
      <span class="all-span">/All:{{ allCount }}</span>
    </div>
    <div class="btn-zone">
      <button class="btn-color" @click="$emit('clear-done')">
        Remove Completed
      </button>
      <button class="btn-color" @click="$emit('clear-all')">󰧮 Clear</button>
    </div>
  </footer>
  <p v-else class="scale-text">No Task!</p>
</template>

<script setup>
import { computed } from 'vue'

// 定义props接收从父组件传递过来的todos数组
const props = defineProps({
  todos: {
    type: Array,
    default: () => [],
  },
  isFilteredDone: {
    type: Boolean,
  },
})
// 定义自定义事件
const emits = defineEmits([
  'toggle-all',
  'filter-done',
  'clear-done',
  'clear-all',
])

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

const handleFilterDone = () => {
  if (doneCount.value === 0 || doneCount.value === allCount.value) return
  emits('filter-done')
}
</script>

<style scoped>
/* 任务列表页脚样式 */
.todo-footer {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  margin: 0 auto;
  margin-bottom: 40px;
  width: 800px;
  background: #2f2d2c;
  border-right: 3px solid #5c5958;
  cursor: default;
  box-shadow: 2px 4px 10px #222;
}

/* 页脚内容样式 */
.todo-footer .footer-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
}
.todo-footer .footer-content input[type='checkbox'] {
  top: 5px;
  left: -25px;
}
/* 全选复选框样式增加 */
.todo-footer .footer-content .label-checkbox {
  top: 13px;
  left: -26px;
}

/* Completed文字样式 */
.todo-footer .done-span {
  color: #3c8527;
  text-shadow: 2px 2px 0 #000;
  cursor: default;
}
/* 跳动黄字通用样式 */
@keyframes scaleIcon {
  0%,
  100% {
    transform: scale(1.5);
  }
  50% {
    transform: scale(2.2);
  }
}
/* All文字样式 */
.todo-footer .all-span {
  flex: 1;
  display: flex;
  align-items: center;
  color: #ffc42b;
  text-shadow: 2px 2px 0 #000;
}
.todo-footer .active-icon {
  color: #6fab43;
  font-size: 16px;
  text-shadow:
    1px 1.5px 0 #4a3321,
    0 0 4px #ccc;
  animation: scaleIcon 0.5s ease-in-out infinite;
}
.todo-footer .done-span.active {
  font-weight: bold;
  text-shadow: 1px 2px 2px #4a3321;
  border-radius: 10px;
  cursor: pointer;
}

/* 按钮样式 */
.todo-footer .btn-zone button {
  margin-left: 10px;
  padding: 2px 10px;
  cursor: pointer;
}
</style>
