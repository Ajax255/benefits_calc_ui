<script>
import { Doughnut } from 'vue-chartjs'
export default {
  extends: Doughnut,

  props: {
    chartdata: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.renderChart(this.chartdata, this.options)
  },
}
</script>

<style>
@media only screen and (max-width: 700px) {
  #doughnut-chart {
    width: 250px;
    height: 250px;
  }
}
</style>
