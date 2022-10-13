import Vue from "vue";
import Router from "vue-router";
import Home from "@/page/home";
import Promote from "@/page/promote";
import My from "@/page/my";
import Register from "@/page/register";
import Login from "@/page/login";
import Article from "@/page/article";
import Bill from "@/page/bill";
import With from "@/page/with";

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
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/article",
      name: "article",
      component: Article
    },
    {
      path: "/bill",
      name: "bill",
      component: Bill
    },
    {
      path: "/with",
      name: "with",
      component: With
    }
  ]
});
