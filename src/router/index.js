import Vue from "vue";
import VueRouter from "vue-router";

import MainLayout from "@/layouts/MainLayout";
import Dashboard from "@/views/Dashboard";
import UsersList from "@/views/users/UsersList";
import BooksList from "@/views/books/BooksList";
import ChaptersList from "@/views/chapters/ChaptersList";
import UnitsList from "@/views/units/UnitsList";
import PaymentsList from "@/views/payments/PaymentsList";
import Settings from "@/views/Settings";

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
        path: "books",
        name: "books-list",
        component: BooksList,
      },
      {
        path: "chapters",
        name: "chapters-list",
        component: ChaptersList,
      },
      {
        path: "units",
        name: "units-list",
        component: UnitsList,
      },
      {
        path: "users",
        name: "users-list",
        component: UsersList,
      },
      {
        path: "payments",
        name: "payments-list",
        component: PaymentsList,
      },
      {
        path: "settings",
        name: "settings",
        component: Settings,
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
