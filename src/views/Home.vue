<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"> <br>
    <button type="button" class="btn btn-outline-danger" @click="loginPage()">登入後台</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    loginPage () {
      this.$router.push('/login')
    }
  }
}
</script>
