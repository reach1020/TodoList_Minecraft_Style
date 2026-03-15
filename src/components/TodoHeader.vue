<template>
  <header class="todo-header">
    <div class="header-text">
      <h2>TodoList</h2>
      <p class="scale-text">Click to Edit Task!</p>
    </div>
    <div class="add-todo">
      <input
        type="text"
        placeholder="please input todo..."
        v-model.trim="content"
        @keyup.enter="addTodo"
      />
      <!-- 使用按钮和回车均可添加任务 -->
      <button class="btn-color" @click="addTodo">Add Task<span>></span></button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const content = ref('')
// 自定义事件addTodo
const emits = defineEmits(['add-todo'])

/**
 * 添加任务
 */
function addTodo() {
  // 1. 校验输入内容是否为空
  if (!content.value) {
    alert('请输入待办事项')
    return
  }
  /**
   * 2.组装任务对象
   * id: 任务唯一标识符,使用当前时间戳
   * content: 任务内容,从输入框获取
   * done: 任务完成状态,默认false(未完成)
   */
  const todo = {
    id: Date.now(),
    content: content.value,
    done: false,
    isShow:true,
  }
  // 3.发送数组给app组件
  emits('add-todo', todo)
  // 4. 清空输入框
  content.value = ''
}
</script>

<style scoped>
.todo-header {
  margin-top: 80px;
  padding: 5px 0 10px;
}
.todo-header .header-text{
  position: relative;
  width: 760px;
  margin: 0 auto;
  text-align: center;
  /* 3D效果,与文字3D效果配合使用 */
  perspective: 900px;
  cursor: default;
}

/* 标题样式,3D效果 */
.todo-header .header-text h2 {
  color: #d0c5c0;
  font-size: 160px;
  /* 文字阴影 */
  text-shadow:
    -4px -2px 0 #000,
    8px -2px 0 #000,
    -4px 15px 0 #3d3938,
    8px 15px 0 #3d3938;
  letter-spacing: -10px;
  /* 文字3D效果 */
  transform: rotateX(45deg) scaleY(1.3);
  transform-origin: bottom center;
}
/* 跳动黄字 */
.todo-header .header-text .scale-text {
  position: absolute;
  top: 150px;
  left: 400px;
}

/* 添加任务框样式 */
.todo-header .add-todo {
  margin-top: 10px;
  display: flex;
  gap: 5px;
  justify-content: center;
}
/* 输入框样式 */
.todo-header .add-todo input {
  width: 675px;
  height: 40px;
  padding: 0 10px;
  background: #262423;
  color: #f8f8f8;
  outline: none;
  border: solid 2px #898481;
  box-shadow:
    inset 0 4px 2px #000,
    0 4px 10px #222;
}
.todo-header .add-todo input::placeholder {
  font-size: 16px;
}
/* 添加任务按钮样式 */
.todo-header .add-todo button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  font-size: 16px;
  line-height: 30px;
}
.todo-header .add-todo button span {
  font-size: 24px;
  font-weight: 100;
  line-height: 30px;
  margin-left: 5px;
}
</style>
