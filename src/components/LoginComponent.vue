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
      console.log("yep");
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == "admin" &&
          this.input.password == "pasword"
        ) {
          axios
            .get(
              "http://localhost:9090/api/v1/benefits" +
                "/" +
                "f80b5043-2b35-4977-9cb7-4a69db436ff4"
            )
            .then(response => {
              console.log(response);
              console.log("completed");
            });
          this.$emit("authenticated", true);
          this.$router.replace({
            name: "BenefitsComponent",
            props: this.input.username
          });
        } else {
          console.log("The username and / or password is incorrect");
        }
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