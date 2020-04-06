<template>
  <div class="wrapper">
    <div id="login">
      <div class="ws_logo">
        <center>
          <img src="../assets/23_WRIGHTSTATE_BIPLANE_N_REV.png" class="logo" />
        </center>
      </div>
      <center>
        <h1>Employee Benefits Login:</h1>
      </center>
      <center>
        <input
          v-model="input.username"
          type="text"
          name="username"
          placeholder="Username"
        />
      </center>
      <center>
        <input
          v-model="input.password"
          type="password"
          name="password"
          placeholder="Password"
        />
      </center>
      <br />
      <center>
        <button type="button" @click="login()">Login</button>
      </center>
    </div>
  </div>
</template>

<script>
import BenefitsService from '@/services/BenefitsService.js';

export default {
  name: 'Login',
  data() {
    return {
      input: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      if (this.input.username != '' && this.input.password != '') {
        BenefitsService.checkAuthorization(
          this.input.username,
          this.input.password,
        ).then(auth => {
          console.log(auth.data);
          if (auth.data != '') {
            BenefitsService.getBenefits(auth.data).then(response => {
              this.$store.dispatch('setBenefits', response.data);
              this.$router.replace({
                name: 'BenefitsComponent',
              });
            });
          } else {
            console.log('The username and / or password is incorrect');
          }
        });
      } else {
        console.log('A username and password must be present');
      }
    },
  },
};
</script>

<style scoped>
h1 {
  color: #ffffff;
  font-family: 'Georgia', serif;
  font-size: 17px;
}
.wrapper {
  height: auto;
  background-color: #fff;
}
#login {
  width: 45%;
  border: 0px;
  background-color: #146a37;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
  border-radius: 20px;
  filter: drop-shadow(0 0 0.75rem #bababa);
}
input[type='text'],
select,
textarea {
  border-radius: 10px;
  width: 60%;
  margin-bottom: 12px;
  height: 25px;
}
input[type='password'],
select,
textarea {
  border-radius: 10px;
  width: 60%;
  margin-bottom: 0px;
  height: 25px;
}
button[type='button'] {
  background-color: #ffffff;
  color: #146a37;
  padding: 8px 20px;
  border: none;
  font-family: 'Georgia', serif;
  border-radius: 6px;
  cursor: pointer;
}
button[type='button']:hover {
  background-color: #c3e8d2;
}

.logo {
  width: 45%;
  height: auto;
  margin-bottom: 15px;
}
</style>
