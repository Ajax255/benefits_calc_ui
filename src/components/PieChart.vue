<script>
import { Doughnut } from "vue-chartjs";


export default {
  extends: Doughnut,
  
  data: () => ({
    chartdata: {
      labels: ["Salary", "Benefits"],
      datasets: [
        {
          data: ['.5', 'test'],
          backgroundColor: ["#026937", "#cea052"],
          label: "Dataset 1"
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: "top",
        labels: {
          fontSize: 15 // Where font size for lables is set (need to figure a way to dynamically set this)
        }
      },
      title: {
        display: true,
        position: "top",
        text: "Total Compensation",
        fontSize: 20 // Where font size for the title is set (need to figure a way to dynamically set this)
      },
      animation: {
        animateScale: true,
        animateRotate: true
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 40
        }
      }
    }
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>

<style>
@media only screen and (max-width: 700px) {
  #doughnut-chart {
    width: 250px;
    height: 250px;
  }
}
</style>
