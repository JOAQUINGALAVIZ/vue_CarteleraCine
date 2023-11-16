
import { createRouter, createWebHistory } from 'vue-router';
import Pelicula-1 from '@/views/pelicula-1.vue'; // Asegúrate de tener la ruta correcta a tu componente

const routes = [
  {
    path: '/pelicula-1',
    name: 'Pelicula-1',
    component: Pelicula-1,
  },
  // Otras rutas
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
