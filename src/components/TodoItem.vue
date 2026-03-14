<template>
  <li class="todo-item">
    <input
      :id="`todo-checkbox-${id}`"
      type="checkbox"
      :checked="done"
      @change="handleChange"
    />
    <!-- 所有的checkbox都使用了相同的id="todo-checkbox"，这是一个问题。
     因为id应该是唯一的，当多个元素使用相同的id时，浏览器只会识别第一个元素。 -->
    <label :for="`todo-checkbox-${id}`" class="label-checkbox"></label>
    <input
      v-if="isEditing"
      v-focus
      type="text"
      :value="content"
      @blur="handleUpdate"
      @keyup.enter="handleUpdate"
    />
    <span v-else @click="isEditing = true" :class="{ done: done }">{{
      content
    }}</span>
    <button class="btn-color" @click="handleDelete">Delete</button>
  </li>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  id: {
    type: Number,
  },
  content: {
    type: String,
  },
  done: {
    type: Boolean,
  },
})

const emits = defineEmits(['toggle', 'update', 'delete'])

const isEditing = ref(false)

// 约定:在setup中有形如vFocus,被当做一个指令
const vFocus = {
  // 当指令应用的元素被挂载到DOM时,自动获取焦点
  mounted(el) {
    // el是当前元素:就是指令应用的元素,这里就是inputDOM对象,调用原生的focus函数获取焦点
    el.focus()
  },
}

// 向APP组件发送toggle事件,将当前的id和选中的状态传过去
const handleChange = (event) => {
  emits('toggle', props.id, event.target.checked)
}
const handleUpdate = (event) => {
  // 内容不为空
  if (!event.target.value) {
    alert('内容不能为空')
    return
  }
  emits('update', props.id, event.target.value)
  // 1.反转isEditing状态
  isEditing.value = false
  //
}

const handleDelete = () => {
  emits('delete', props.id)
}
</script>

<style scoped>
.todo-item {
  list-style: none;
  position: relative;
  /* 两侧内边距 */
  padding-inline: 30px;
  height: 40px;
  line-height: 40px;
  text-shadow: 2px 2px 0 #000;
  box-shadow:
    0 -1px 2px #2f2d2c,
    0 1px 0px #222,
    0 2px 0px #2f2d2c,
    0 3px 0px #5a5352;
  display: flex;
  align-items: center;
}
.todo-item:hover {
  background-color: #ede5e2;
  border-left: 2px solid #3b3939;
  text-shadow: 2px 2px 0 #bbb;
}
.todo-item:hover span {
  color: #000;
}
.todo-item span,
.todo-item input[type='text'] {
  flex: 1;
  margin: 0 20px;
  color: #fff;
}
.todo-item input[type='text']{
  height: 30px;
  background-color: #ede5e2;
  color: #000;
  font-size: 16px;
  outline: none;
  border: none;
  box-shadow: inset -2px 2px 2px #666,
   -2px 2px 2px #999;
}
.todo-item span.done {
  text-decoration: line-through;
  color: red;
}
.todo-item button {
  width: 80px;
  font-weight: 500;
  padding: 3px 0;
  cursor: pointer;
}
</style>
