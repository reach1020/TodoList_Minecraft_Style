<template>
  <main class="todo-list">
    <ul>
      <li>
        <input type="checkbox" />
        <span>待办事项1</span>
        <button>删除</button>
      </li>
      <li>
        <input type="checkbox" />
        <span>待办事项2</span>
        <button>删除</button>
      </li>
    </ul>
  </main>
</template>

<script setup></script>

<style scoped>
.todo-list ul li {
  list-style: none;
  position: relative;
  /* 两侧内边距 */
  padding-inline: 40px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
}
.todo-list ul li:hover {
  background-color: #ddd;
}
.todo-list li span {
  flex: 1;
  margin-left: 20px;
}
.todo-list li button {
  padding: 0 10px;
}
</style>
