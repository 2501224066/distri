import Vue from "vue";
import Router from "vue-router";
import Home from "@/page/home";
import Promote from "@/page/promote";
import My from "@/page/my";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/promote",
      name: "promote",
      component: Promote
    },
    {
      path: "/my",
      name: "my",
      component: My
    }
  ]
});
