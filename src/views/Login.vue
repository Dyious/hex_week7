<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-place">
      <div class="container">
        <span class="text-white text-title">管理</span>
      </div>
    </nav>
    <div class="container flex-center pt-5">
      <form
        class="card border-place my-5"
        style="width: 18rem;"
      >
        <div class="card-body text-center">
          <input
            type="text"
            id="email"
            class="input-text-info my-2"
            placeholder="@"
            v-model="user.email"
          >
          <input
            type="password"
            id="password"
            class="input-text-info my-2"
            placeholder="password"
            v-model="user.password"
          >
          <div
            ref="pleaseInsert"
            class="text-danger text-small hide"
          > 請輸入資料</div>
          <input
            type="button"
            value="登入"
            class="btn btn-block btn-sm bg-sm-place text-white mt-4"
            @click="signin()"
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signin () {
      const userInfo = this.user

      if (userInfo.name === '' || userInfo.password === '') {
        this.$refs.pleaseInsert.classList.remove('hide')
        return
      }

      const load = this.$loading.show()

      this.$http.post(`${process.env.VUE_APP_APIPATH}/auth/login`, userInfo)
        .then((response) => {
          console.log(response.data)
          const token = response.data.token
          const expired = response.data.expired

          this.$cookie.set('token', token, new Date(expired * 1000))
          load.hide()
          this.$router.push('/dashboard/products')
        }).catch((err) => {
          alert(err)
        }).finally(() => {
          load.hide()
        })
    }
  },
  watch: {
    user: {
      handler () {
        this.$refs.pleaseInsert.classList.add('hide')
      },
      deep: true
    }
  }
}
</script>

<style>
.text-small {
  font-size: 0.5rem;
}
.hide {
  display: none !important;
}
</style>
