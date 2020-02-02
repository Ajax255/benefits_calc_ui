import Vue from 'vue';
import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';
import App from './App.vue';

Vue.use(Chartkick.use(Chart));
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
