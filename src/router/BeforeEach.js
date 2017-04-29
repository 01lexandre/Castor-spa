// import localStorage from '@components/plugins/local-storage'
import Vue from 'vue'
// import AuthService from '@domains/auth/services'
import { ApiRoute } from '@components/plugins/api-routes'
import localStorage from '@components/plugins/local-storage'
import store from '@store'
const env = process.env

export default (to, from, next) => {
  // Verifica se precisa de Auth
  let needAuth = to.meta.auth
  let hasToken = localStorage.get('token') !== null
  let hasUserState = store.getters.getStateUser.id !== ''
  if (needAuth) {
    console.log('Precisa de Auth')

    if (hasToken && hasUserState) {
      console.log('tem token e userstate')
      next()
    } else if (hasToken && !hasUserState) {
      console.log('tem token e nao userstate')
      Vue.http.get(ApiRoute.url(env.AUTH.ME), '')
        .then((response) => {
          console.log('Token Autorizado ' + response)
          store.commit('CHANGE_USER', response.body.data)
          store.commit('ISLOGGED', true)
          next()
        })
        .catch((error) => {
          console.log('Token não Autorizado ' + error)
          next({name: 'AUTH.LOGOUT'})
        })
    } else {
      next({name: 'AUTH.LOGIN'})
    }
  } else {
    next()
  }
}
