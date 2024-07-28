import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const app = createApp(App);

const pinia = createPinia();  // Certifique-se de criar a instância do Pinia

app.use(pinia);               // Use a instância do Pinia
app.use(router);              // Use o roteador
app.mount('#app');            // Monte a aplicação