import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";
import type { RouteLocationNormalized } from "vue-router";

export default defineNuxtRouteMiddleware((to: RouteLocationNormalized) => {
  const validGenders = ["male", "female"];
  if (to.params.gender && !validGenders.includes(to.params.gender as string)) {
    return navigateTo("/");
  }
});
