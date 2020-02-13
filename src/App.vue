<template>
  <div id="app">
    <BenefitsComponent></BenefitsComponent>
  </div>
</template>

<script>
import BenefitsComponent from "./components/BenefitsComponent.vue";

export default {
  name: 'app',
  components: {
    BenefitsComponent
  }
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 10px 10px 10px 10px;
  }
</style>
