<script setup>
import Pelicula from '../components/Pelicula.vue';
import { usePeliculasStore } from '../stores/peliculas'

const peliculas = usePeliculasStore()
</script>

<template>
  <h1 class="text-6xl font-extrabold">Péliculas</h1>

  <p v-if="peliculas.noPeliculas" class="my-10 text-center text-2xl">No hay Resultados, utiliza las listas para agregar peliculas</p>

  <div v-else class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-10 gap-10">
    <Pelicula
        v-for="pelicula in peliculas.peliculas"
        :pelicula="pelicula"
        :key="pelicula.id"
    />
  </div>
</template>