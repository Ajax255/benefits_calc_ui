import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/LoginComponent";
import Benefits from "@/components/BenefitsComponent";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/benefits",
      name: "BenefitsComponent",
      component: Benefits,
    },
    {
      path: "/",
      name: "Login",
      component: Login,
    },
  ],
});
