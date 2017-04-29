<template>
  <center>Saindo :/</center>
</template>

<script>
  import AuthService from '@domains/auth/services'

  export default {
    created () {
      AuthService.logout()
        .then((response) => {
          this.$router.replace({ name: 'AUTH.LOGIN' })
        })
        .catch((error) => {
          console.log(error)
          this.$router.replace({ name: 'AUTH.LOGIN' })
        })
    }
  }
</script>
