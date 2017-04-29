// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Main from './components/Main.vue'
import router from './router'
import store from './store/index'
import interceptor from './components/plugins/interceptor'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  interceptor,
  store,
  el: '#app',
  render: h => h(Main)
})
