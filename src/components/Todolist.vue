<template>
  <main class="todo-list">
    <ul>
      <slot></slot>
    </ul>
  </main>
</template>

<script setup>

</script>

<style scoped>
  .todo-list {
    width: 800px;
    margin: 0 auto;
    background-color: #3D3938;
    border-right: 3px solid  #5C5958;
    border-top: 3px solid  #5C5958;
  }
</style>
