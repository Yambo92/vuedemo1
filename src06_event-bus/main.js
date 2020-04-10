 /* 入口文件 */
import Vue from 'vue'
import App from './App.vue'
import './base.css'
import eventBus from './event-bus'
Vue.config.productionTip = false

//把一个vm对象作为全局事件总线对象， 挂载到Vue原型对象上
//所有的组件对象都可以看到他， 可以通过他进行事件机制通信
Vue.prototype.$bus = eventBus

new Vue({
  render: h => h(App)
}).$mount('#app')
