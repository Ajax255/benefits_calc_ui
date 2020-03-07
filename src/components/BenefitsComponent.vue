<template>
  <div class="shadow-background">
    <div class="shadow-two-background">
      <table class="shadow-three-background">
        <!-- <div v-for="benefit in benefits" :key="benefit">
          <H1>{{ benefit.name }}</H1>
        </div>
        <button type="button" (click)="fetchBenefits()">Click Me!</button>-->
        <tr class="doc-header">
          <td class="td-left">
            <img
              class="wright-logo"
              alt="Wright State Logo"
              src="../assets/02_WRIGHTSTATE_BIPLANE_N_FULL.jpg"
            />
          </td>
          <td class="td-right total-comp">
            <span style="color:#026937">
              Total Compensation Statement
              <br />
            </span>
            <span style="color:#CEA052">
              staff (.75FTE or Greater)
              <br />
            </span>
            <span style="color:#026937"
              >Estimate & Illustrative of Approximate Salary</span
            >
          </td>
        </tr>
        <tr class="benefits-summary">
          <td class="td-left">
            <table class="summary-table">
              <tr class="header-green">
                <th class="table-column-left" colspan="2">Salary</th>
              </tr>
              <tr>
                <td class="table-column-left">Base Salary</td>
                <td class="table-column-right">$45,000.00</td>
              </tr>
              <tr>
                <td class="table-column-left">Total Salary</td>
                <td class="table-column-right">$45,000.00</td>
              </tr>
              <tr class="header-orange">
                <th class="table-column-left" colspan="2">
                  Benefits (WSU paid)
                </th>
              </tr>
              <tr>
                <td class="table-column-left">Medical-Single(HDHP)</td>
                <td class="table-column-right">$5,568.00</td>
              </tr>
              <tr>
                <td class="table-column-left">Dental-Single</td>
                <td class="table-column-right">$355.00</td>
              </tr>
              <tr>
                <td class="table-column-left">Vision-Single</td>
                <td class="table-column-right">$77.00</td>
              </tr>
              <tr>
                <td class="table-column-left">Retirement</td>
                <td class="table-column-right">$6,300.00</td>
              </tr>
              <tr>
                <td class="table-column-left">Health Savings Accounts (HSA)</td>
                <td class="table-column-right">$500.00</td>
              </tr>
              <tr>
                <td class="table-column-left">Life Insurance</td>
                <td class="table-column-right">$144.00</td>
              </tr>
              <tr>
                <td class="table-column-left">
                  Accidental Death & Dismemberment
                </td>
                <td class="table-column-right">$22.00</td>
              </tr>
              <tr>
                <td class="table-column-left">Long Term Disability</td>
                <td class="table-column-right">$108.00</td>
              </tr>
              <tr>
                <td class="table-column-left">Medicare</td>
                <td class="table-column-right">$653.00</td>
              </tr>
              <tr>
                <td class="table-column-left">Holidays (10 days)</td>
                <td class="table-column-right">$1,731.00</td>
              </tr>
              <tr>
                <td class="table-column-left">Winter Leave (2 days)</td>
                <td class="table-column-right">$346</td>
              </tr>
              <tr>
                <th class="table-column-left">Approximate Total Benefits</th>
                <td class="table-column-right">$15,804.00</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr class="header-green">
                <th class="table-column-left">
                  Approximate Total Compensation
                </th>
                <td class="table-column-right">$60,804.00</td>
              </tr>
              <div>
                <!-- <json-data>{{jsonData}}</!-->
                -->
              </div>
            </table>
          </td>
          <td class="td-right-pie-chart">
            <center>
              <pie-chart></pie-chart>
            </center>
          </td>
        </tr>
        <tr class="additional-benefits">
          <td colspan="2"></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import PieChart from "../components/PieChart.vue";
import axios from "axios";
import benefitsList from "../data/data2.json";

export default {
  components: {
    "pie-chart": PieChart
  },
  mounted: function() {
    const baseURL = "http://localhost:9090/api/v1/benefits";
    for (var benefits of benefitsList) {
      axios.post(baseURL, benefits).then(console.log("completed"));
    }
    axios.get(baseURL).then(response => console.log(response));
  }
};
</script>

<style scoped>
@media only screen and (max-width: 700px) {
  .td-left {
    font-size: 0.75em;
  }
  .td-right {
    font-size: 0.75em;
  }
}
.shadow-background {
  padding: 13px 13px 13px 13px;
  width: fit-content;
  height: fit-content;
  background: #026937;
}
.shadow-two-background {
  padding: 10px 10px 10px 10px;
  width: fit-content;
  height: fit-content;
  background: #cea052;
}
.shadow-three-background {
  padding: 10px 10px 10px 10px;
  width: fit-content;
  height: fit-content;
  background: white;
}
.doc-header {
  text-align: center;
  min-height: 10%;
}
.wright-logo {
  width: 50%;
  height: auto;
  padding: 10px 10px 10px 10px;
}
.total-comp {
  text-align: center;
  padding: 10px 10px 10px 10px;
}
.benefits-summary {
  min-height: 60%;
}
.pie-chart {
  width: 50%;
  height: 50%;
  background: none;
}
.summary-table {
  width: 90%;
}
.additional-benefits {
  min-height: 30%;
  background: #f2f1eb;
}
.header-green {
  color: white;
  background: #026937;
}
.header-orange {
  color: white;
  background: #cea052;
}
.td-left {
  width: 75%;
}
.td-right {
  width: 25%;
}
.table-column-left {
  text-align: left;
}
.table-column-right {
  text-align: right;
}
</style>
