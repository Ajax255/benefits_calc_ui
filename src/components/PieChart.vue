<template>
    <pie-chart :data="chartData"></pie-chart>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      chartData: {
        '2017-05-13': 2,
        '2017-05-14': 3,
        '2017-05-15': 2,
      },
    };
  },
};
</script>

<style></style>