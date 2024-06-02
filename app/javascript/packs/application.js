import { createApp } from 'vue';
import App from '../app.vue';

const app = createApp({
  render: () => App
});

app.mount('#app');
