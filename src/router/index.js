import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Note from "@/views/Note.vue";
import Character from "@/views/Character.vue";
import Monster from "@/views/Monster.vue";
import Item from "@/views/Item.vue";
import Place from "@/views/Place.vue";
import Quest from "@/views/Quest.vue";

const routes = [
  {path: "/", name: "Home", component: Home},
  {path: "/about", name: "About", component: About},
  {path: "/characters/:char", name: "characters", component: Character},
  {path: "/monsters/:monster", name: "monsters", component: Monster},
  {path: "/:note", name: "notes", component: Note},
  {path: "/items/:item", name: "items", component: Item},
  {path: "/places/:place", name: "places", component: Place},
  {path: "/quests/:quest", name: "quests", component: Quest}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
