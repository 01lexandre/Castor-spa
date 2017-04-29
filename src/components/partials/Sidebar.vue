<template>
  <div v-if="isLogged" class="sidebar" data-color="purple" data-image="static/img/sidebar-4.jpg">
    <div class="logo">
      <a href="http://www.creative-tim.com" class="simple-text">
        Creative Tim
      </a>
    </div>
    <div class="sidebar-wrapper">
      <ul class="nav">
        <li class="active">
          <a href="#">
            <i class="material-icons">dashboard</i>
            <p>Dashboard</p>
          </a>
        </li>
        <li class="active-pro">
          <a>
            <i class="material-icons">unarchive</i>
            <p>01lexandre</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import store from '@store'
  export default {
    name: 'sidebar',
    data () {
      return {
      }
    },
    computed: {
      isLogged: function () {
        return store.getters.getIsLogged
      }
    }
  }
</script>

