<template>
  <div>
      <chartjs-doughnut v-bind:labels="labels" v-bind:datasets="datasets" v-bind:option="option"></chartjs-doughnut>
  </div> 
</template>


<script>

export default {
   data(){
     return{
       labels: ["Salary", "Benefits"],
     
     datasets: [
       {
         data: [.74, .26],
         backgroundColor: ["#026937", "#CEA052"],
         hoverBackgroundColor: ["#02b55e", "#ffc96e"]
       }
     ],
     option: {
       title: {
         display: true,
         position: "top",
         text: "Total Compensation",
         
       },
       maintainAspectRatio: true,
       responsive: true
       
     }
   };
   }
  
};
</script>

<style>


</style>

