<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
import { baseURL } from "../src/APICalls";
import benefitsList from "../src/data/sampleList.json";

export default {
  name: "app",
  mounted: function() {
    axios.get(baseURL).then(response => {
      var object = response.data;
      if (Object.keys(object).length == 0) {
        for (var benefits of benefitsList) {
          axios.post(baseURL, benefits).then(console.log("completed"));
        }
        console.log("created");
      } else {
        console.log("no need");
      }
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 10px 10px 10px 10px;
}
</style>
