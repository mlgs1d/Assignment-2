import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("../views/Home.vue") },
  { path: "/about-us", component: () => import("../views/AboutUs.vue") },
  {
    path: "/our-services",
    component: () => import("../views/OurServices.vue"),
  },
  {
    path: "/our-customers",
    component: () => import("../views/OurCustomers.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
