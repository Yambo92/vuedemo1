 /* 入口文件 */
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import axios from 'axios'
import { Button, Cell } from 'mint-ui'
import router from './router'
Vue.config.productionTip = false

Vue.use(VueResource)

Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)

//创建事件总线
Vue.prototype.$bus = new Vue();
Vue.prototype.$axios = axios;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
