// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
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

import 'element-ui/lib/locale/lang/zh-CN'
import 'element-ui/lib/locale/lang/en'

Vue.use(VueI18n)
Vue.use(elementUI)
Vue.prototype.$ajax = axios;
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'zh-CN',
  messages: {
    'zh-CN': require('@/assets/lang/zh'),
    'en-US': require('@/assets/lang/en')
  }
})
// Vue.use(elementUI, {
//   i18n: (key, value) => i18n.t(key, value)
// });

Vue.prototype.changeView = function (url) {
  this.$router.push('/' + url);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
