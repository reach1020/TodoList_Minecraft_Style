<template>
  <main class="todo-list">
    <ul>
      <slot></slot>
    </ul>
  </main>
</template>

<script setup></script>

<style scoped>
/* 任务列表样式 */
.todo-list {
  width: 800px;
  margin: 0 auto;
  background-color: #3d3938;
  border-right: 3px solid #5c5958;
  border-top: 3px solid #5c5958;
}
</style>
