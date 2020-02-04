<template>
  <div>
      <pie-chart :data="chartData"></pie-chart>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        'Salary': 45000.00,
        'Benefits': 15802.00
      },
    };
  },
};
</script>

<style ></style>