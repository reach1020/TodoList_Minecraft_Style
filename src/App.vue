<template>
  <div class="bg"></div>
  <TodoHeader @addTodo="handleAdd" />
  <TodoList v-if="todos.length">
    <draggable v-model="todos" item-key="id">
      <template #item="obj">
        <TodoItem
          v-bind="obj.element"
          @toggle="handleToggle"
          @update="handleUpdate"
          @delete="handleDelete"
        />
      </template>
    </draggable>
  </TodoList>
  <TodoFooter
    :todos="todos"
    @toggle-all="handleChangeAll"
    @clear-done="handleClearDone"
    @clear-all="handleClearAll"
  />
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import draggable from 'vuedraggable'
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/Todolist.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoItem from './components/TodoItem.vue'

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
  localStorage.removeItem('todos')
}

watch(
  todos,
  () => {
    localStorage.setItem('todos', JSON.stringify(todos.value))
  },
  { deep: true },
)

onMounted(() => {
  const savedTodos = localStorage.getItem('todos')
  if (savedTodos) {
    todos.value = JSON.parse(savedTodos)
  }
})
</script>

<style>
@import 'http://at.alicdn.com/t/c/font_5136873_ru4bucu0u8g.css';

/*声明OTF格式的自定义字体*/
@font-face {
  /* 自定义字体名称：后续使用时要完全匹配 */
  font-family: 'DepartureMono Nerd Font';
  /* 字体文件路径：根据你的实际结构调整 */
  src: url('./assets/fonts/DEPARTUREMONONERDFONT-REGULAR.OTF')
    format('opentype');
  /* 字体权重 */
  font-weight: normal;
  /* 字体样式 */
  font-style: normal;
  /* 加载策略：先显示备用字体，避免空白 */
  font-display: swap;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'DepartureMono Nerd Font', monospace;
}
/* 隐藏滚动条 */
body {
  overflow-x: hidden;
  overflow-y: auto;
  min-width: 800px;
}

/* 背景图片 */
.bg {
  position: fixed;
  top: -10px;
  right: -10px;
  bottom: -10px;
  left: -10px;
  background: url('./assets/images/bg.png') no-repeat;
  background-size: cover;
  background-position: center;
  /* 模糊滤镜 */
  filter: blur(7px);
  z-index: -1;
}
/* 跳动黄字通用样式 */
@keyframes scaleAnima {
  0%,
  100% {
    transform: rotate(-10deg) scale(1);
  }
  50% {
    transform: rotate(-10deg) scale(1.1);
  }
}
.scale-text {
  width: 200px;
  margin: 10px auto;
  color: #ffff00;
  font-size: 40px;
  text-align: center;
  text-wrap: nowrap;
  text-shadow: 3px 3px 0 #3f3f00;
  transform: rotate(-10deg);
  animation: scaleAnima 0.5s ease-in-out infinite;
  cursor: default;
}
/* 按钮通用样式 */
.btn-color {
  background-color: #3d3938;
  color: #fff;
  text-shadow: 2px 2px 0 #000;
  border: solid 2px #aba09c;
  box-shadow:
    inset 0 2px 2px #000,
    0 2px 5px #222;
  cursor: pointer;
}
.btn-color:hover {
  background-color: #aaa;
  color: #000;
  border: solid 2px #fff;
  text-shadow: 2px 2px 0 #999;
  box-shadow:
    inset 0 2px 2px #686260,
    0 2px 5px #222;
}

/* 实现选中框红石效果 */
input[type='checkbox'] {
  opacity: 0;
  position: absolute;
  cursor: pointer;
}
/* 未选中 */
.label-checkbox {
  position: absolute;
  left: 24px;
  top: 20px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background: #4a0505;
  border: 3px solid #6b0101;
  border-radius: 5px;
  cursor: pointer;
}
.label-checkbox::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 10px;
  transform: translateY(-50%);
  width: 7px;
  height: 7px;
  background: #2a0101;
  cursor: pointer;
}
.label-checkbox::after {
  content: '';
  position: absolute;
  left: 0px;
  top: 4px;
  transform: translateY(-50%);
  width: 7px;
  height: 7px;
  background: #570101;
  cursor: pointer;
}
/* 选中,相邻兄弟选择器修改全选后的样式 */
input[type='checkbox']:checked + .label-checkbox {
  position: absolute;
  left: 24px;
  top: 20px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background: #f86b69;
  border: 4px solid #fd2727;
  border-radius: 2px;
  cursor: pointer;
}
input[type='checkbox']:checked + .label-checkbox::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 9px;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  background: #f84442;
  cursor: pointer;
}
input[type='checkbox']:checked + .label-checkbox::after {
  content: '';
  position: absolute;
  left: 0px;
  top: 3px;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  background: #f8b2af;
  cursor: pointer;
}
</style>
