<template>
  <div class="">
    <h1>{{ msg }}</h1>
    <div class="img-circle" style="width: 40px; height: 40px;overflow:hidden;">
      <img src="http://cdn.nawe.by/image/c31aa1b0-1fcb-11e7-a778-4535d086b3e0.jpg" class="img-responsive">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your VueSkell01'
      }
    }
  }
</script>
