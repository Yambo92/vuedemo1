<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"></Header>
      <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo"></List>
      <Footer :todos="todos" :selectAll="selectAll" :deleteCompleted="deleteCompleted"></Footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default {
  name: 'App',
  data(){
    return {
      todos: JSON.parse(localStorage.getItem('todos_key') || "[]") 
    }
  },
  watch: {
    todos: {
      deep: true, //深度监视，内部发生任何变化都调用
      handler: function(value){ // todos发生了变化
          //保存todos
          localStorage.setItem('todos_key', JSON.stringify(this.todos))
      }
    }
  },
  methods: {
    addTodo(todo){
      this.todos.unshift(todo)
    },
    deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    updateTodo(todo, complete){
      todo.complete = complete;
    },
    selectAll(isCheck){
      /* 全选或全不选 */
      this.todos.forEach(todo => todo.complete = isCheck)
    },
    deleteCompleted(){
       this.todos = this.todos.filter(todo => !todo.complete)
    }
  },
  components: {
    Header,
    List,
    Footer
  }
}
</script>

<style scoped>
   .todo-container{
     width: 600px;
     margin: 0 auto;
   }
   .todo-container .todo-wrap{
     padding: 10px;
     border: 1px solid #ddd;
     border-radius: 5px;
   }
</style>
