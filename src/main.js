// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap'
import elementUI from 'element-ui'
import axios from 'axios'
import './axios/config.js'
import * as echarts from 'echarts'
import '@/assets/css/common.css'
import '@/assets/css/table.css'

Vue.use(elementUI)
Vue.prototype.$ajax = axios;
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

Vue.prototype.changeView = function (url) {
  this.$router.push('/' + url);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
