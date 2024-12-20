import { createRouter, createWebHistory, } from "vue-router";
import Catalog from "~/pages/catalog/[type].vue";

const routes = [
  {
    path: "/:type",
    component: Catalog,
    beforeEnter: (to: any, from: any, next: any) => {
      const validTypes = ["female", "male"];
      if (!validTypes.includes(to.params.type as string)) {
        next("/female");
      } else {
        next();
      }
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/female",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;