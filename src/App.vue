<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <pie-chart :data="chartData"></pie-chart>
  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
    return {

      chartData: {

        '2017-05-13': 2,
        '2017-05-14': 3,
        '2017-05-15': 10,
      },
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
