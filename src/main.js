// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import * as Echarts from 'echarts'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import VueCookies from 'vue-cookies'
import App from './App'
import vuetify from './plugins/vuetify'
import router from './router'

console.log(Echarts, '为啥这样慢呢')
Vue.prototype.$echarts = Echarts
window.echarts = Echarts
console.log(Vue.prototype.$echarts, '=========12344', window.echarts, Echarts)

Vue.config.productionTip = false

// axios.defaults.timeout = 20000
// axios.interceptors.response.use(function (response) {
//   console.log('Request success! ' + (response && response.status))
//   return response
// }, function (error) {
//   console.log('Request Fail!')
//   return Promise.reject(error)
// })

Vue.use(VueCookies)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  components: { App },
  template: '<App/>'
})
