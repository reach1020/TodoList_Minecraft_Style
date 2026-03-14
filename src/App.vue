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
}
.btn-color {
  background-color: #3d3938;
  color: #fff;
  text-shadow: 2px 2px 0 #000;
  border: solid 2px #aba09c;
  box-shadow: inset 0 2px 2px #000;
  cursor: pointer;
}
.btn-color:hover {
  background-color: #898584;
  color: #222;
  border: solid 2px #3d3938;
  text-shadow: 2px 2px 0 #777;
  box-shadow: inset 0 2px 2px #686260;
}
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
  filter: blur(5px);
  z-index: -1;
}
</style>
