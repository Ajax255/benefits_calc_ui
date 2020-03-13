<template>
  <div id="login">
    <h1>Login</h1>
    <input
      v-model="input.username"
      type="text"
      name="username"
      placeholder="Username"
    />
    <input
      v-model="input.password"
      type="password"
      name="p assword"
      placeholder="Password"
    />
    <button type="button" @click="login()">Login</button>
  </div>
</template>

<script>
import BenefitsService from '@/services/BenefitsService.js'

export default {
  name: 'Login',
  data() {
    return {
      input: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      if (this.input.username != '' && this.input.password != '') {
        BenefitsService.checkAuthorization(
          this.input.username,
          this.input.password
        ).then(auth => {
          console.log(auth.data)
          if (auth.data != '') {
            BenefitsService.getBenefits(auth.data).then(response => {
              this.$store.dispatch('setBenefits', response.data)
              this.$router.replace({
                name: 'BenefitsComponent'
              })
            })
          } else {
            console.log('The username and / or password is incorrect')
          }
        })
      } else {
        console.log('A username and password must be present')
      }
    }
  }
}
</script>

<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>
