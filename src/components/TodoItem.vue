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
    <!-- 输入框气泡 -->
    <span v-if="isEditing" class="bubble-big">○</span>
    <span v-if="isEditing" class="bubble-middle">○</span>
    <span v-if="isEditing" class="bubble-small">○</span>
    <input
      v-if="isEditing"
      v-focus
      type="text"
      :value="content"
      @blur="handleUpdate"
      @keyup.enter="handleUpdate"
    />
    <span v-else @click="isEditing = true" :class="{ done: done }" class="item-content">{{
      content
    }}</span>
    <!-- ○ -->
    <button class="btn-color" @click="handleDelete">Delete</button>
  </li>
</template>

<script setup>
import { ref } from 'vue'
// 定义props接收从父组件传递过来的属性
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
  isShow: {
    type: Boolean,
  },
})

// 定义emit事件,用于向父组件发送事件
const emits = defineEmits(['toggle', 'update', 'delete'])
// 定义一个状态变量isEditing,用于记录当前任务项是否正在编辑
const isEditing = ref(false)

// 约定:在setup中有形如vFocus,被当做一个指令
const vFocus = {
  // 当指令应用的元素被挂载到DOM时,自动获取焦点
  mounted(el) {
    // el是当前元素:就是指令应用的元素,这里就是inputDOM对象,调用原生的focus函数获取焦点
    el.focus()
  },
}

/**
 * 向APP组件发送toggle事件,将当前的id和选中的状态传过去
 * @param event 事件对象
 */
const handleChange = (event) => {
  emits('toggle', props.id, event.target.checked)
}
/**
 * 更新任务内容
 * @param event 事件对象
 */
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

/**
 * 删除任务
 */
const handleDelete = () => {
  emits('delete', props.id)
}
</script>

<style scoped>
/* 任务项样式 */
.todo-item {
  list-style: none;
  position: relative;
  /* 两侧内边距 */
  padding-inline: 30px;
  height: 40px;
  line-height: 40px;
  text-shadow: 2px 2px 0 #000;
  /* 中间分割线凹凸效果 */
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

/* 气泡样式 */
.bubble-big{
  position: absolute;
  right: 120px;
  top: -8px;
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  border-radius: 50%;
  color: #75d5fbc5;
  text-shadow: 1px 1.5px 1px #ffffff;
}
.bubble-middle{
  position: absolute;
  right: 115px;
  top: 0px;
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 16px;
  font-weight: bolder;
  border-radius: 50%;
  color: #2CB6FB;
  text-shadow: 1px 1px 1px #ffffff83;
}
.bubble-small{
  position: absolute;
  right: 124px;
  top: 9px;
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 10px;
  font-weight: 900;
  border-radius: 50%;
  color: #75D6FB;
  text-shadow: 1px 1px 1px #ffffff;
}

.todo-item:hover .item-content {
  color: #000;
}
/* 文字内容样式 */
.todo-item .item-content,
.todo-item input[type='text'] {
  flex: 1;
  margin: 0 20px;
  color: #fff;
}
/* 输入框样式 */
.todo-item input[type='text']{
  height: 30px;
  background-color: #ede5e2;
  color: #000;
  font-size: 16px;
  outline: none;
  border-top: 4px solid #2CB6FB;
  border-right: 4px solid #2cb6fbcf;
  border-bottom: 3px solid #75D6FB;
  border-left: 3px solid #2cb6fbd8;
  border-radius: 10px;
  box-shadow: 0 0 20px #2cb6fbd8;
}
/* 已完成任务样式 */
.todo-item .item-content.done {
  text-decoration: line-through;
  color: red;
}
/* 删除按钮样式 */
.todo-item button {
  width: 80px;
  font-weight: 500;
  padding: 3px 0;
  cursor: pointer;
}
</style>
