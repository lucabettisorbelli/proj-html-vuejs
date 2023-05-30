import { createApp } from "vue";
import "../src/styles/general.scss";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faShoppingCart, faBars);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
