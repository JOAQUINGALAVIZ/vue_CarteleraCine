
import { createRouter, createWebHistory } from 'vue-router';
import Pelicula1 from '@/views/pelicula-1.vue';
import Pelicula5 from '@/views/pelicula-5.vue';


const routes = [
  {
    path: '/pelicula-1',
    name: 'Pelicula-1',
    component: Pelicula1,
  },
    {
    path: '/pelicula-5',
    name: 'Pelicula-5',
    component: Pelicula5,
  },
  // Otras rutas
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
