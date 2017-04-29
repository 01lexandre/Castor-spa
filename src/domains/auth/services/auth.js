import Vue from 'vue'
import { ApiRoute } from '@components/plugins/api-routes'
import localStorage from '@components/plugins/local-storage'
import store from '@store'
const env = process.env

export const login = (user) => {
  console.log(user)
  return Vue.http.post(ApiRoute.url(env.AUTH.LOGIN), user)
    .then((response) => {
      localStorage.set('token', response.body.meta.token)
      store.commit('CHANGE_USER', response.body.data)
      store.commit('ISLOGGED', true)
      return response
    })
}

export const logout = () => {
  return Vue.http.get(ApiRoute.url(env.AUTH.LOGOUT), '')
    .then((response) => {
      localStorage.remove('token')
      store.commit('CHANGE_USER', '')
      store.commit('ISLOGGED', false)
      return response
    })
}

export const register = (user) => {
  return Vue.http.post(ApiRoute.url(env.AUTH.REGISTER), user)
    .then((response) => {
      // console.log(response)
      localStorage.set('token', response.body.meta.token)
      store.commit('CHANGE_USER', response.body.data)
      store.commit('ISLOGGED', true)
      return response
    })
}
