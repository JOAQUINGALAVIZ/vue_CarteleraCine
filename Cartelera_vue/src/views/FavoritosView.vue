<script setup>
  import {useFavoritosStore} from '../stores/favoritos'
  import Pelicula from "@/components/Pelicula.vue";

  const favoritos = useFavoritosStore()
</script>

<template>
  <h1 class="text-6xl font-extrabold">Favoritos</h1>
  
  <p v-if="favoritos.noFavoritos" class="my-10 text-center text-2xl">No hay Favoritos</p>

  <div v-else class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-10 gap-10">
    <Pelicula
        v-for="pelicula in favoritos.favoritos"
        :pelicula="pelicula"
        :key="pelicula.id"
    />
  </div>
</template>
