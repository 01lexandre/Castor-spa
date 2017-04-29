import Vue from 'vue'
import VueResource from 'vue-resource'
import { ApiRoute } from '@components/plugins/api-routes'
import localStorage from '@components/plugins/local-storage'
// import { Auth } from '@domains/auth/services'

Vue.use(VueResource)

Vue.http.options.root = ApiRoute.url()

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', `Bearer ${localStorage.get('token')}`)
  request.headers.set('Content-Language', 'pt-BR')
  next()
})

// let nonloggedRoutes = ['auth/login', 'auth/logout']

Vue.http.interceptors.push((request, next) => {
  next()
})
