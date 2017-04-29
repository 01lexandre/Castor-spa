import Login from '../components/Login.vue'
import Logout from '../components/Logout.vue'
import Register from '../components/Register.vue'

export default [
  {
    path: '/login',
    component: Login,
    name: 'AUTH.LOGIN',
    meta: {
      title: 'Entrar',
      auth: false
    }
  },
  {
    path: '/logout',
    component: Logout,
    name: 'AUTH.LOGOUT',
    meta: {
      title: 'Saindo',
      auth: false
    }
  },
  {
    path: '/register',
    component: Register,
    name: 'AUTH.REGISTER',
    meta: {
      title: 'Crie sua Conta',
      auth: false
    }
  }
]
