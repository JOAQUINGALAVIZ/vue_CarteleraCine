<script setup>
import Pelicula from '../components/Pelicula.vue';
import { usePeliculasStore } from '../stores/peliculas';
import { ref, watchEffect } from 'vue';
import Header from "@/components/Header.vue";

const peliculas = usePeliculasStore();
const showPaginator = ref(false);

watchEffect(() => {
  showPaginator.value = peliculas.peliculas.length > 0;
});

const handlePageChange = (newPage) => {
  peliculas.setCurrentPage(newPage);
};
</script>

<template>
  <div>
    <h1 class="text-6xl font-extrabold mb-4">Películas</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-10 gap-10">
      <Pelicula
          v-for="pelicula in peliculas.peliculas"
          :pelicula="pelicula"
          :key="pelicula.title"
      />
    </div>

    <div v-if="showPaginator" class="mt-8 flex items-center justify-center space-x-4">
      <button
          @click="handlePageChange(peliculas.currentPage - 1)"
          :disabled="peliculas.currentPage === 1"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Anterior
      </button>
      <span class="text-xl font-bold">{{ peliculas.currentPage }}</span>
      <button
          @click="handlePageChange(peliculas.currentPage + 1)"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Siguiente
      </button>
    </div>
  </div>
</template>
