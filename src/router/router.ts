import { Router, createRouter, createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'


const router:Router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
  ],
});

export default router;
