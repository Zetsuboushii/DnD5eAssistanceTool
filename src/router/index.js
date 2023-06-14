import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Notes1 from "@/views/Notes1.vue";
import Notes2 from "@/views/Notes2.vue";
import Character from "@/views/Character.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/notes1", name: "Notes1", component: Notes1 },
  { path: "/notes2", name: "Notes2", component: Notes2 },
  { path: "/characters/:charname", component: Character },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
