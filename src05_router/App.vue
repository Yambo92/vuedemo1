<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Router Basic - 01</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link class="list-group-item" to="/about">About</router-link>
          <router-link class="list-group-item" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 在此显示当前路由组件界面 -->
            <router-view msg="abd"></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "App",
  methods: {
    hint() {
      Toast({
        message: "提示",
        position: "top",
        duration: 5000
      });
    }
  },
  components: {}
};
</script>

<style scoped>
 .router-link-active{
      color: #ff5168 !important
    }
</style>
