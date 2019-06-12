import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// dispatch从小往上传递数据
Vue.prototype.$dispatch = function (eventName, data) {
  let parent = this.$parent
  while (parent) {
    // 通过父元素一级级把数据emit给上一级
    parent.$emit(eventName, data)
    //递归查找父元素
    parent = parent.$parent
  }
}
// boardcast从上辈往子孙代传递数据
Vue.prototype.$boardcast = function (eventName, data) {
  boardcast.call(this, eventName, data)
}
function boardcast(eventName, data) {
  this.$children.forEach(child => {
    // 每一个子组件
    child.$emit(eventName, data)
    if (child.$children.length) {
      boardcast.call(child, eventName, data)
    }
  });
}

new Vue({
  render: h => h(App),
}).$mount('#app')
