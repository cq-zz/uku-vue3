import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import Uku from '../packages/index';
import router from './router';

const app = createApp(App);
app.use(Uku);
app.use(router);
app.mount("#app");
