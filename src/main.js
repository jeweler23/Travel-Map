import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/style.css";
import App from "./App.vue";
import { createRouter } from "vue-router";

const app = createApp(App);
const pinia = createPinia();
const router = createRouter();

app.use(pinia);
app.use(router);
app.mount("#app");
// .component("fa", FontAwesomeIcon)
