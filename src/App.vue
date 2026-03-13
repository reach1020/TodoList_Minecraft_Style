<template>
  <header class="todo-header">
    <h2>TodoList</h2>
    <div class="add-todo">
      <input type="text" placeholder="请输入待办事项" />
      <button>添加</button>
    </div>
  </header>
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
  <footer class="todo-footer">
    <input type="checkbox" />
    <span>已完成0项/全部事项2</span>
    <button>清除已办</button>
    <button>清除全部</button>
  </footer>
</template>

<script setup></script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.todo-header {
  padding: 5px 0 10px;
  background-color: #0b87ff;
  color: #f0f8ff;
  text-align: center;
}
.todo-header h1 {
  font-size: 24px;
}
.todo-header .add-todo {
  margin-top: 10px;
  display: flex;
  gap: 5px;
  justify-content: center;
}
.todo-header .add-todo input {
  width: 300px;
  height: 30px;
  padding: 0 10px;
  border-radius: 3px;
  outline: none;
  border: solid 1px white;
}
.todo-header .add-todo button {
  display: inline-block;
  width: 80px;
  background-color: #eee;
  color: #0b87ff;
  line-height: 30px;
  border: none;
  border-radius: 3px;
}
.todo-header .add-todo button:hover {
  cursor: pointer;
  background-color: #fff;
  color: #ff6700;
}
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
