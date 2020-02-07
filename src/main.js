import Vue from 'vue';
//import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';
import App from './App.vue';
import "hchs-vue-charts";

Vue.use(window.VueCharts);
Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
}).$mount('#app');
