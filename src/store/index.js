import Vue from 'vue'
import Vuex from 'vuex'
// import Stores from '@domains/store.js'
import Auth from '@domains/auth/store/index'
import AlertMessage from '../components/plugins/alertmessage/store/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Auth, AlertMessage }
})
