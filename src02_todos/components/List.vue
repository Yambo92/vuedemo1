<template>
  <ul class="todo-main">
    <Item v-for="todo in todos" :key="todo.id" :todo="todo" :deleteTodo="deleteTodo" :index="todo.id" :updateTodo="updateTodo"></Item>
  </ul>
</template>

<script>
import Item from "./Item";
export default {
  components: {
    Item
  },
  props: ["todos", "deleteTodo", "updateTodo"]
};
</script>

<style scoped>
.todo-main {
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0;
  margin: 10px 0px;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
