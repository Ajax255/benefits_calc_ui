<template>
  <div class="shadow-background">
    <div class="shadow-two-background">
      <div class="shadow-three-background">
        <div class="doc-header">
          <div class="doc-header-left">
            <img
              class="wright-logo"
              alt="Wright State Logo"
              src="../assets/02_WRIGHTSTATE_BIPLANE_N_FULL.jpg"
            />
          </div>
          <div class="doc-header-right">
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
          </div>
        </div>
        <div class="doc-body-mid">
          <table class="summary-table doc-body-left">
            <tr class="header-green">
              <th class="td-left" colspan="2">Salary</th>
            </tr>
            <tr>
              <td class="td-left">Base Salary</td>
              <td class="td-right">$45,000.00</td>
            </tr>
            <tr>
              <td class="td-left">Total Salary</td>
              <td class="td-right">$45,000.00</td>
            </tr>
            <tr class="header-orange">
              <th class="td-left" colspan="2">Benefits (WSU paid)</th>
            </tr>
            <tr>
              <td class="td-left">Medical-Single(HDHP)</td>
              <td class="td-right">$5,568.00</td>
            </tr>
            <tr>
              <td class="td-left">Dental-Single</td>
              <td class="td-right">$355.00</td>
            </tr>
            <tr>
              <td class="td-left">Vision-Single</td>
              <td class="td-right">$77.00</td>
            </tr>
            <tr>
              <td class="td-left">Retirement</td>
              <td class="td-right">$6,300.00</td>
            </tr>
            <tr>
              <td class="td-left">Health Savings Accounts (HSA)</td>
              <td class="td-right">$500.00</td>
            </tr>
            <tr>
              <td class="td-left">Life Insurance</td>
              <td class="td-right">$144.00</td>
            </tr>
            <tr>
              <td class="td-left">
                Accidental Death & Dismemberment
              </td>
              <td class="td-right">$22.00</td>
            </tr>
            <tr>
              <td class="td-left">Long Term Disability</td>
              <td class="td-right">$108.00</td>
            </tr>
            <tr>
              <td class="td-left">Medicare</td>
              <td class="td-right">$653.00</td>
            </tr>
            <tr>
              <td class="td-left">Holidays (10 days)</td>
              <td class="td-right">$1,731.00</td>
            </tr>
            <tr>
              <td class="td-left">Winter Leave (2 days)</td>
              <td class="td-right">$346</td>
            </tr>
            <tr>
              <th class="td-left">Approximate Total Benefits</th>
              <td class="td-right">$15,804.00</td>
            </tr>
            <tr class="header-green">
              <th class="td-left">Approximate Total Compensation</th>
              <td class="td-right">{{benefits.name}}$60,804.00</td>
            </tr>
            <div>{{ this.$route.params }}</div>
          </table>

          <div class="pie-chart doc-body-right">
            <center>
              <pie-chart></pie-chart>
            </center>
          </div>
        </div>
        <div class="doc-body-end">
          <div class="doc-end">
            <h3>Additional benefits not quantified but part of package:</h3>
            <div class="add-benefits-check">
              <li>
                Sick Leave - for accrual rate visit
                <a
                  href="htps://policy.wright.edu/policy/8420-sick-leave"
                  target="_blank"
                  >Sick Leave Policy</a
                >
              </li>
              <li>
                Tuition Remission: Employee 100%, Spouses and Dependents 80%
              </li>
              <li>
                Vacation - for accrual rate visit
                <a
                  href="htps://policy.wright.edu/policy/8410-vacation"
                  target="_blank"
                  >Vacation Policy</a
                >
              </li>
            </div>
            <li>Supplemental Retirement Offerings (403(b), 457(b) plans)</li>
            <div class="add-benefits-check">
              <li>Adoption Assistance - Up to $4,000 per child</li>
              <li>Employee Assistance Program</li>
              <li>Engage Healthcare Transparency Tool</li>
              <li>Family Medical Leave</li>
              <li>Milestone Years of Service Awards</li>
              <li>
                Onsite Preventive Screenings: Mobile Mammography, Biometric
                Screening & Flu Shots
              </li>
              <li>Paid Parental Leave</li>
              <li>Tobacco-Free Campus</li>
              <li>Volunteer Opportunities</li>
            </div>
            <li>
              Flexible Spending Accounts (Healthcare and Dependent Daycare)
            </li>
            <li>Onsite Fitness Center & Onsite Health Management Screenings</li>
            <li>Short-Term Disability</li>
            <li>Supplemental Life Insurance: Employee, Spouse & Dependent</li>
            <br />
            <center>
              <li>
                Charges Apply
                <b>✓</b> No Charge
              </li>
            </center>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PieChart from "../components/PieChart.vue";

export default {
  components: {
    "pie-chart": PieChart
  },
  data() {
    return {
      benefits: this.$route.params
    };
  },
  props: {
    id: String,
    name: String
  },
};
</script>

<style scoped lang="scss">
@media only screen and (min-width: 1300px) {
  .doc-header {
    font-size: 1.5em;
  }

  .doc-body-mid {
    font-size: 1em;
  }

  .doc-body-end {
    font-size: 1em;
  }
  .additional-benefits {
    font-size: 0.75em;
  }
}

@media only screen and (max-width: 1300px) {
  .doc-header {
    font-size: 1.25em;
  }

  .doc-body-mid {
    font-size: 1em;
  }

  .doc-body-end {
    font-size: 1em;
  }
}

@media only screen and (max-width: 1000px) {
  .doc-header {
    font-size: 1em;
  }

  .doc-body-mid {
    font-size: 1em;
  }

  .doc-body-end {
    font-size: 1em;
  }
}

@media only screen and (max-width: 700px) {
  .doc-header {
    font-size: 0.75em;
  }

  .doc-body-mid {
    font-size: 0.75em;
  }

  .doc-body-end {
    font-size: 0.75em;
  }
}

.shadow-background {
  margin: auto;
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
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 25%;
}

.doc-body-mid {
  display: flex;
  width: 100%;
  height: 50%;
}

.doc-body-end {
  width: 100%;
  height: 25%;
}

.doc-header-left {
  width: 33%;
}

.doc-header-right {
  padding: 10px 10px 10px 10px;
  width: 66%;
}

.doc-body-left {
  width: 66%;
}

.doc-body-right {
  width: 33%;
}

.doc-end {
  padding: 0px 10px 10px 10px;
  background: #f2f1eb;
}

.wright-logo {
  padding: 10px 10px 10px 10px;
  width: 75%;
  height: auto;
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
  text-align: left;
}

.td-right {
  width: 25%;
  text-align: right;
}

.pie-chart {
  background: none;
  padding: 10px 10px 10px 10px;
}

.add-benefits-check li {
  list-style: none;
  padding-bottom: 0.5em;
  text-align: left;
}

li {
  list-style-type: disc;
  padding-left: 1em;
  padding-bottom: 0.5em;
}

.add-benefits-check li:before {
  content: "✓  ";
  font-weight: bold;
  padding-right: 0.25em;
}

.boxr {
  border: 1px solid red;
}

.boxb {
  border: 1px solid blue;
}

.boxg {
  border: 1px solid green;
}

.boxo {
  border: 1px solid orange;
}
</style>
