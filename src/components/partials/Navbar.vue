<template>
  <nav class="navbar navbar-transparent navbar-absolute" v-if="isLogged">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="">...</a>
      </div>
      <div class="collapse navbar-collapse" style="    padding-top: 10px;">
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown useravatar">
            <a href="#" class="dropdown-toggle linkavatar" data-toggle="dropdown">
              <div class="img-circle" style="width: 30px; height: 30px; overflow: hidden;">
                <img :src="user.avatar" :alt="user.name" class="img-responsive img-navuser img-raised" height="30">
              </div>

              <p class="hidden-lg hidden-md">{{user.name}}</p>
            </a>
            <ul class="dropdown-menu dropdown-menu-right">
              <li><a href="#">Sair</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  import store from '@store'
  import { mapGetters } from 'vuex'
  export default {
    name: 'navbar',
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters({
        user: 'getStateUser'
      }),
      isLogged: function () {
        return store.getters.getIsLogged
      }
    }
  }
</script>
<style>
.img-navuser{

}
.navbar-absolute{
  padding-top: 0px !important;

}
  .useravatar .linkavatar{
    padding: 0 !important;
  }

</style>

