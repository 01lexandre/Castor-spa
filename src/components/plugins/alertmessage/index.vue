<template>
  <div class="alert" :class="type">
    <div class="container-fluid">
      <div class="alert-icon" v-if="Alert.icon">
        <i class="material-icons">{{Alert.icon}}</i>
      </div>
      {{Alert.message}}
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      type: function () {
        if (this.Alert.type === 'info') {
          return 'alert-info'
        } else if (this.Alert.type === 'error') {
          return 'alert-danger'
        }
      },
      ...mapState({
        Alert: state => {
          return state.AlertMessage
        }
      })
    }
  }
</script>

<style lang="scss">
  .alert{
    position: fixed;
    width: 100%;

  }
</style>
