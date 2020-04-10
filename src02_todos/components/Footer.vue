<template>
  <div class="todo-footer">
      <label for="">
          <input type="checkbox" v-model="checkAll" />
      </label>
      <span>
          <span>已完成{{completedCount}}</span> / 全部{{ todos.length }}
      </span>
      <button class="btn btn-danger" v-if="completedCount>0" @click="deleteCompleted">清除已完成任务</button>
  </div>
</template>

<script>
export default {
    props:{
        todos: Array,
        selectAll: Function,
        deleteCompleted: Function
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
    }
}
</script>

<style scoped>
    .todo-footer{
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }
    .todo-footer label{
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }
    .todo-footer label input{
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }
    .todo-footer button{
        float: right;
        margin-top: 5px;
    }
</style>