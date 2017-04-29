<template>
  <div id="app" class="wrapper">
    <AlertMessage v-if="Alert"></AlertMessage>
    <Sidebar></Sidebar>
    <div :class="{ 'main-panel': isLogged }">
      <Navbar></Navbar>
      <div class="content">
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AlertMessage from '../components/plugins/alertmessage/index.vue'
  import Sidebar from './partials/Sidebar.vue'
  import Navbar from './partials/Navbar.vue'
  import { mapState } from 'vuex'
  import store from '@store'
  export default {
    name: 'app',
    components: {
      Sidebar,
      Navbar,
      AlertMessage
    },
    computed: {
      ...mapState({
        Alert: state => {
          return state.AlertMessage.status
        }
      }),
      isLogged: function () {
        return store.getters.getIsLogged
      }
    }
  }
</script>

<style src="@sass/style.scss" lang="sass"></style>
