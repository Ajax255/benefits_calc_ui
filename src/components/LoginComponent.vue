<template>
  <div id="login">
    <h1>Login</h1>
    <input type="text" name="username" v-model="input.username" placeholder="Username" />
    <input type="password" name="password" v-model="input.password" placeholder="Password" />
    <button type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        axios
          .get(
            "http://localhost:9090/api/v1/authorization" +
              "/" +
              this.input.username +
              "/" +
              this.input.password
          )
          .then(auth => {
            console.log(auth.data);
            if (auth.data != "") {
              axios
                .get(
                  "http://localhost:9090/api/v1/benefits" +
                    "/" +
                    auth.data["Name"]
                )
                .then(response => {
                  this.$router.replace({
                    name: "BenefitsComponent",
                    params: response.data
                  });
                });
            } else {
              console.log("The username and / or password is incorrect");
            }
          });
      } else {
        console.log("A username and password must be present");
      }
    }
  }
};
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
