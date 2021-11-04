import Vue from "vue";
import VueRouter from "vue-router";

import MainLayout from "@/layouts/MainLayout";
import Dashboard from "@/views/Dashboard";
import UsersList from "@/views/users/UsersList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "dashboard",
        component: Dashboard,
      },
      {
        path: "users",
        name: "users-list",
        component: UsersList,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
