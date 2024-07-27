import { createRouter, createWebHashHistory } from "vue-router";
import HeroesListView from "../modules/HeroesListModule.vue"; 

const routes = [
  {
    path: "/",
    name: "HeroesListView",
    component: HeroesListView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
