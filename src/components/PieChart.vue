<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  data: () => ({
    chartdata: {
      labels: ["Salary", "Benefits", "Dark-Gray", "Gray", "Light-Gray"],
      datasets: [
        {
          data: [0.74, 0.26, 0.15, 0.15, 0.15],
          backgroundColor: [
            "#026937",
            "#cea052",
            "#666666",
            "#aaaaaa",
            "#cccccc"
          ],
          label: "Dataset 1"
        }
      ]
    },
    options: {
      responsive: true,
      legend: {
        position: "top"
      },
      title: {
        display: true,
        position: "top",
        text: "Total Compensation",
        fontSize: 20,
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>

<style>
@media only screen and (max-width: 700px){
  #doughnut-chart {
    width: 250px;
    height: 250px;
  }
}
</style>

