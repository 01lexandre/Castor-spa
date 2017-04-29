<template>
  <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
    <div class="card card-signup">
      <form class="form" @submit.prevent=" login " style="padding: 10px;">
        <div class="header header-primary text-center fadeInDown animated" data-background-color="orange">
          <h4>Entrar</h4>
          <div class="social-line">
            <a class="btn btn-simple btn-just-icon">
              <i class="fa fa-facebook-square"></i>
            </a>
            <a class="btn btn-simple btn-just-icon">
              <i class="fa fa-google-plus"></i>
            </a>
          </div>
        </div>
        <p class="text-divider">ou</p>
        <div class="content" >

          <div class="input-group">
            <span class="input-group-addon">
              <i class="material-icons">face</i>
            </span>
            <div class="form-group is-empty">
              <input v-model="user.email" type="email" class="form-control" placeholder="E-mail">
              <span class="material-input"></span>
            </div>
          </div>

          <div class="input-group">
            <span class="input-group-addon">
              <i class="material-icons">email</i>
            </span>
            <div class="form-group is-empty">
              <input v-model="user.password" type="password" placeholder="Password..." class="form-control">
              <span class="material-input"></span>
            </div>
          </div>

        </div>
        <div class="footer text-center" style="padding: 15px 0px 15px 0px">
          <button type="submit" v-if="!loading" class="btn btn-default btn-round  fadeIn animated">
            Entrar
            <div class="ripple-container"></div>
          </button>
          <svg v-if="loading" class="spinner transition" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
            <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
          </svg>
          <p class="text-divider"></p>
          <router-link class="btn btn-simple" :to="{ name: 'AUTH.REGISTER' }">Cadastrar-se</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import store from '@store'
  import AuthServices from '../services/index'
  export default {
    name: 'ComponentLogin',
    data () {
      return {
        user: {
          email: '01.lexandre@gmail.com',
          password: 'lacrimas'
        },
        loading: false
      }
    },
    methods: {
      login () {
        this.loading = true
        AuthServices.login(this.user)
          .then((response) => {
            this.$router.replace({ name: 'HOME.INDEX' })
          })
          .catch((error) => {
            console.log(error)
            this.loading = false
            store.commit('SET_ALERT_MESSAGE', {
              message: error.body.data.error,
              timeout: '5',
              icon: 'info_outline',
              type: 'error'
            })
          })
      }
    }
  }
</script>
