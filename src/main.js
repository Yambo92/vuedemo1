 /* 入口文件 */
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import axios from 'axios'
import store from './store'
Vue.config.productionTip = false

Vue.use(VueResource)

//创建事件总线
Vue.prototype.$bus = new Vue();
Vue.prototype.$axios = axios;
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
