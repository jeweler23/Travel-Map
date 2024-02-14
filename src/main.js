import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);
const pinia = createPinia();
// const router = createRouter({
//   history: createWebHistory(),
// });

app.use(pinia);
// app.use(router);
app.mount("#app");
// .component("fa", FontAwesomeIcon)
