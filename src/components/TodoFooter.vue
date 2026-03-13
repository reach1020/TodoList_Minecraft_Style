<template>
  <footer class="todo-footer">
    <input type="checkbox" />
    <span>完成事项0/全部事项2</span>
    <button>清除已办</button>
    <button>清除全部</button>
  </footer>
</template>

<script setup></script>

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
</style>
