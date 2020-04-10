<template>
  <li :style="{background: bgColor}"  @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
    <label for="">
      <input type="checkbox" v-model="isCheck" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="handleDelete(index)">删除</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object,
    deleteTodo: Function,
    index: [String, Number],
    updateTodo: Function
  },
  data(){
    console.log('Item()', this)
    return{
      bgColor: 'white',
      isShow: false
    }
  },
  methods: {
    handleEnter (isEnter) {
      if(isEnter){
        this.bgColor = '#ccc';
        this.isShow = true
      }else{
        this.bgColor = '#fff';
        this.isShow = false
      }
    },
    handleDelete(index){
      if(confirm('确认删除吗？')){
        this.deleteTodo(index)
      }else{

      }
    }
  },
  computed: {
    isCheck: {
      get(){ //checkbox是否勾选取决于props中的todo.complete
        return this.todo.complete
      },
      set (value) {//用户操作checkbox界面时候调用
        this.updateTodo(this.todo, value)
      }
    }
  },
}
</script>

<style scoped>
  li{
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }
  li label{
    float: left;
    cursor: pointer;
  }
  li label li input{
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px
  }
  li button{
    float: right;
    margin-top: 3px;
  }
  li::before{
    content: initial;
  }
  li:last-child{
    border-bottom: none;
  }
</style>
