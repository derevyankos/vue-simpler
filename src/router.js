import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('./components/HelloWorld.vue'),
  },
  {
    path: "/gmap",
    name: "GMap",
    component: () => import('./components/gmap.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;