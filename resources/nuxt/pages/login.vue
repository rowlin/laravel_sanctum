<template>
  <div class="container card mt-5 mb-5">
    <h1>Login</h1>
    <form>
      <input class="form-control"
             type="text" v-model="user.username"
             autocomplete="off"
             @keyup.enter="login">

      <input class="form-control mt-3"
             type="password" v-model="user.password"
             @keyup.enter="login">
    </form>
    <button class="btn btn-success mt-3 mb-3" type="submit" color="primary" @click.prevent="login">Login
    </button>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      user: {
        username: '',
        password: '',
      }
    };
  },
  methods: {
    async login() {
      try {
        const data = await this.$auth.loginWith('local', {
          data: this.user
        })
        this.$router.push('/admin')
      } catch (e) {
        this.$toast.error('Error').goAway(2500)
      }
    },
  }
}
</script>

<style scoped>
.card {
  max-width: 300px;
}

</style>
