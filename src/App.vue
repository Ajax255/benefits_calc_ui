<template>
  <div id="app">
    <BenifitsComponent></BenifitsComponent>
  </div>
</template>

<script>
import BenifitsComponent from "./components/BenifitsComponent.vue";

export default {
  name: 'app',
  components: {
    BenifitsComponent,
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
