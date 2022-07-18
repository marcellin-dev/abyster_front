import Vue from "vue";
import VueRouter from "vue-router";
import SignUp from "../views/SignUp.vue";
import Login from "../views/Login.vue";
import Home from "../views/Depense.vue";
import Revenu from "../views/Revenu.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/depense",
    name: "home",
    component: Home,
  },
  {
    path: "/revenu",
    name: "revenu",
    component: Revenu,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
