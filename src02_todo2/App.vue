<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <Header @addTodo="addTodo"></Header> -->
      <Header ref="header"></Header>
      <List :todos="todos"></List>
      <Footer
        :todos="todos"
        :selectAll="selectAll"
        :deleteCompleted="deleteCompleted"
      >
        <template v-slot:left>
          <input type="checkbox" v-model="checkAll" />
        </template>
        <template v-slot:middle>
          <span>
            <span>已完成{{ completedCount }}</span> / 全部{{ todos.length }}
          </span>
        </template>
        <template v-slot:right>
          <button
            class="btn btn-danger"
            v-if="completedCount > 0"
            @click="deleteCompleted"
          >
            清除已完成任务
          </button>
        </template>
      </Footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import PubSub from "pubsub-js";
export default {
  name: "App",
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos_key") || "[]")
    };
  },
  watch: {
    todos: {
      deep: true, //深度监视，内部发生任何变化都调用
      handler: function(value) {
        // todos发生了变化
        //保存todos
        localStorage.setItem("todos_key", JSON.stringify(this.todos));
      }
    }
  },
  mounted() {
    this.$refs.header.$on("addTodo", this.addTodo);
    //通过事件总线绑定自定义事件监听
    this.$bus.$on("deleteTodo", this.deleteTodo);
    this.token = PubSub.subscribe("updateTodo", (msg, { todo, complete }) => {
      this.updateTodo(todo, complete);
    });
  },
  beforeDestroy() {
    this.$refs.header.$off("addTodo");
    this.$bus.$off("deleteTodo");
    PubSub.unsubscribe(this.token);
  },
  computed:{
        completedCount(){
            return this.todos.reduce((pre, todo) =>
                pre + (todo.complete ? 1 : 0)
            ,0)
        },
        checkAll: {
            get(){
                return this.todos.length === this.completedCount && this.todos.length
            },
            set(value){ //用户点击checkbox的时候调用
                this.selectAll(value)
            }
        }
    },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo);
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    updateTodo(todo, complete) {
      todo.complete = complete;
    },
    selectAll(isCheck) {
      /* 全选或全不选 */
      this.todos.forEach(todo => (todo.complete = isCheck));
    },
    deleteCompleted() {
      this.todos = this.todos.filter(todo => !todo.complete);
    }
  },
  components: {
    Header,
    List,
    Footer
  }
};
</script>

<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
