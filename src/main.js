import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/style.css";

import App from "./App.vue";
import router from "./router/router.ts";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount("#app");
// .component("fa", FontAwesomeIcon)
