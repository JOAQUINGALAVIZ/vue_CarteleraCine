import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Asegúrate de que tu ruta al archivo del enrutador sea correcta

createApp(App).use(router).mount('#app');
