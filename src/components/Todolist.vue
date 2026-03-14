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
    border-right: 4px solid  #3D3938;
    border-top: 4px solid  #3D3938;
  }
</style>
