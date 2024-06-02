// application.js
import { createApp } from 'vue';
import App from '../App.vue';
import router from '../router/router';

document.addEventListener('DOMContentLoaded', () => {
  const app = createApp(App);
  app.use(router);
  app.mount('#app');
});